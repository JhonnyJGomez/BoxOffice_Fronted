import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { CitiesService } from '@services/cities/cities.service';
import { ModalComponent } from '@components/modal/modal.component';
import { PremiersService } from '@services/premiers/premiers.service';
import { WeeksService } from '@services/weeks/weeks.service';

import {
  CitiesResponse,
  City,
  GetPremieresForecast,
  PremiereResponse,
  Premiere,
  PremiereForecast,
  PremiereSelected,
  PremiersResponse,
  SuccessReponse,
  WeeksResponse
} from '@interfaces/response';

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
  premieresForecast: PremiereForecast[] = [];
  premieresForecastSelected: PremiereForecast;
  premiereToAddParams: Premiere;
  premiereToGenerateForecast = {
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

  ngOnInit() { }

  /**
   * Open modal
   */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    console.log(this.premieresForecastSelected);
    dialogConfig.data = this.premieresForecastSelected;
    dialogConfig.width = '700px';
    dialogConfig.height = '560px';
    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(params => {
      const premiereToSave = [];
      const paramsFromModal = [...params];

      if (paramsFromModal.length > 0) {
        paramsFromModal.forEach(param => {
          premiereToSave.push({
            id_pelicula: this.premieresForecastSelected.id_movie,
            id_parametro: param.id,
            value: param.value instanceof Array ? param.value.join() : param.value
          });
        });

        this.premiersService.postPremiereParameterized(
          { Value: premiereToSave },
          this.week,
          this.premieresForecastSelected.id_movie
        ).subscribe((response: PremiereResponse) => {
          const res = { ...response.value };
          delete res[0].value;
          res[0].ReleaseDate = this.date;
          this.premiereToGenerateForecast.Inputs.input1.push(res[0]);
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
    this.weeksService.getWeeks(this.date).subscribe((response: WeeksResponse) => {
      this.week = Number(response.num_semana);
      this.idWeek = response.id;
    }, error => {
      console.log('Error:', error);
    });
  }

  /**
   * Load premieres and cities data
   */
  loadData() {
    this.getPremiers();
    this.getCities();
  }

  /**
   * Get premieres after selected weeks.
   */
  getPremiers() {
    this.premiersService.getPremiers(this.idWeek).subscribe((response: PremiersResponse) => {
      this.premieres = response.value;
    }, error => {
      console.log('Error:', error);
    });
  }

  /**
   * Get cities
   */
  getCities() {
    this.citiesService.getCities().subscribe((response: CitiesResponse) => {
      this.cities = response.value;
    }, error => {
      console.log('Error:', error);
    });
  }

  /**
   * Save premiere forecast
   */
  savePremiereForecast() {
    const premiereSelected: PremiereSelected[] = [];

    this.premieresListSelected.map(
      premiere => premiereSelected.push({ id_semana: String(this.idWeek), id_pelicula: premiere, id_ciudad: Number(this.citySelected.id) })
    );

    this.premiersService.postAddForecastPremier(premiereSelected).subscribe((response: SuccessReponse) => {
      this.showParamsSection = response.Result === 'OK';
      if (this.showParamsSection) {
        this.getPremiereForecast();
      }
    }, error => {
      console.log('Error:', error);
    });
  }

  /**
   * Get premiere forecast for the parametrization
   */
  getPremiereForecast() {
    this.premiersService.getForecastPremiers(this.citySelected.id, this.idWeek).subscribe((response: GetPremieresForecast) => {
      this.premieresForecast = response.Value;
    }, error => {
      console.log('Error:', error);
    });
  }

  /**
   * Generate forecast
   */
  generateForecast() {
    this.premiersService.postGenerateForecast(this.premiereToGenerateForecast).subscribe(response => {
      this.updateForecastAfterAzureResponse(response.Results.output1);
    }, error => {
      console.log('Error:', error);
    });
  }

  updateForecastAfterAzureResponse(data: [{}]) {
    this.premiersService.updateForecastAfterAzureResponse(data, this.premieresForecastSelected.id_forecast).subscribe(response => {
      this.router.navigateByUrl('/generated/' + this.premieresForecastSelected.id_forecast);
    }, error => {
      console.log('Error:', error);
    });
  }
}
