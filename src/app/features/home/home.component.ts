import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { AzureBody, SecoreLabedGeneratedItem } from '@interfaces/azure';
import { CitiesService } from '@services/cities/cities.service';
import { City } from '@interfaces/cities';
import { ModalComponent } from '@components/modal/modal.component';
import { Premiere } from '@interfaces/premiers';
import { PremiereForecast } from '@interfaces/premiersForecast';
import { PremiereSelected } from '@interfaces/response';
import { PremiersService } from '@services/premiers/premiers.service';
import { WeeksService } from '@services/weeks/weeks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  date: string;
  week: number;
  idWeek: number;
  premieres: Premiere[] = [];
  cities: City[] = [];
  premieresListSelected: string[];
  showParamsSection = false;
  listOfPremieresForecastToNeedParametrized: PremiereForecast[] = [];
  premiereForecastSelectedToSetParamas: PremiereForecast;
  bodyToGetScoredLabelFromAzureServer: AzureBody = {
    Inputs: {
      input1: []
    }
  };
  citySelected: City;

  constructor(
    private weeksService: WeeksService,
    private premiersService: PremiersService,
    private citiesService: CitiesService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {}

  /**
   * Load premieres and cities data
   */
  loadData() {
    this.getPremiers();
    this.getCities();
  }

  /**
   * Open modal
   */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.premiereForecastSelectedToSetParamas;
    dialogConfig.width = '700px';
    dialogConfig.height = '560px';
    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(params => {
      const paramsOfPremierToSaveToForecast = [];
      const paramsUpdatedFromModal = [ ...params ];

      if (paramsUpdatedFromModal.length > 0) {
        paramsUpdatedFromModal.forEach(param => {
          paramsOfPremierToSaveToForecast.push({
            id_pelicula: this.premiereForecastSelectedToSetParamas.id_movie,
            id_parametro: param.id,
            value: param.value instanceof Array ? param.value.join() : param.value
          });
        });

        this.premiersService.postPremiereParameterized(
          { Value: paramsOfPremierToSaveToForecast },
          this.week,
          this.premiereForecastSelectedToSetParamas.id_movie
        ).subscribe(response => {
          if (response.value && response.value.length > 0) {
            const forecastItemBodyToSentAzureServer = response.value[0];
            forecastItemBodyToSentAzureServer.ReleaseDate = this.date;
            this.listOfPremieresForecastToNeedParametrized.find(
              premiere => premiere === this.premiereForecastSelectedToSetParamas
            ).paramSeted = true;

            const forecastItemBodyExist =
              this.bodyToGetScoredLabelFromAzureServer.Inputs.input1.findIndex(
                forecastItemBody => forecastItemBody.Title === forecastItemBodyToSentAzureServer.Title
              );

            forecastItemBodyExist >= 0 ?
              this.bodyToGetScoredLabelFromAzureServer.Inputs.input1[forecastItemBodyExist] = forecastItemBodyToSentAzureServer :
              this.bodyToGetScoredLabelFromAzureServer.Inputs.input1.push(forecastItemBodyToSentAzureServer);
          }
        }, error => {
          console.log('Error:', error);
        });
      }
    });
  }

  /**
   * Get weeks
   */
  getWeeks() {
    this.weeksService.getWeeks(this.date).subscribe(response => {
      this.week = Number(response.num_semana);
      this.idWeek = response.id;
    }, error => {
      console.log('Error:', error);
    });
  }

  /**
   * Get premieres after selected weeks.
   */
  getPremiers() {
    this.premiersService.getPremiers(this.idWeek).subscribe(response => {
      this.premieres = response.value;
    }, error => {
      console.log('Error:', error);
    });
  }

  /**
   * Get cities
   */
  getCities() {
    this.citiesService.getCities().subscribe(response => {
      this.cities = response.value;
    }, error => {
      console.log('Error:', error);
    });
  }

  /**
   * Save premiere forecast - This method will create the forecast
   */
  createPremiereForecast() {
    const premieresSelected: PremiereSelected[] = [];

    this.premieresListSelected.map(
      premiere => premieresSelected.push({
        id_semana: String(this.idWeek),
        id_pelicula: premiere,
        id_ciudad: Number(this.citySelected.id)
      })
    );

    this.premiersService.postCreateForecast(premieresSelected).subscribe(response => {
      this.showParamsSection = response.Result === 'OK';

      if (this.showParamsSection) {
        // TODO: Check why we need to wait this time in order to get the premieres
        setTimeout(() => {
          this.getPremieresForecast();
        }, 1000);
      }
    }, error => {
      console.log('Error:', error);
    });
  }

  /**
   * Get premieres of forecast for the parametrization
   */
  getPremieresForecast() {
    this.premiersService.getForecastPremiers(this.citySelected.id, this.idWeek).subscribe(response => {
      this.listOfPremieresForecastToNeedParametrized = response.Value;
    }, error => {
      console.log('Error:', error);
    });
  }

  /**
   * Generate forecast
   */
  getScoredLabelFromAzureServer() {
    this.premiersService.postGenerateScoreLabelFromAzure(this.bodyToGetScoredLabelFromAzureServer).subscribe(response => {
      this.updateForecastAfterAzureResponse(response.Results.output1);
    }, error => {
      console.log('Error:', error);
    });
  }

  updateForecastAfterAzureResponse(scoreLabelWithDataToUpdateForecast: SecoreLabedGeneratedItem[]) {
    const codeForecast = this.citySelected.id + '' + this.week;

    this.premiersService.updateForecastAfterAzureResponse(scoreLabelWithDataToUpdateForecast, codeForecast).subscribe(response => {
      this.router.navigateByUrl('/generated/' + codeForecast);
    }, error => {
      console.log('Error:', error);
    });
  }
}
