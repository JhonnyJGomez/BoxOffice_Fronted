
import { Component, OnInit, Inject } from '@angular/core';
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
  Premiere,
  PremiereForecast,
  PremiereSelected,
  PremiereToGenerateForecast,
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
  premieres: Premiere[] = [];
  cities: City[] = [];
  premieresListSelected: string[];
  showParamsSection = false;
  premieresForecast: PremiereForecast[] = [];
  premieresForecastSelected: PremiereForecast;
  premiereToAddParams: Premiere;
  premiereToGenerateForecast: PremiereToGenerateForecast = {
    Inputs: [],
    GlobalParameters: {}
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

  getItems() {
    return this.premieres.filter(premier => premier.checked);
  }

  /**
   * Open modal
   */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.premieresForecastSelected;
    dialogConfig.width = '700px';
    dialogConfig.height = '560px';
    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(params => {
      const premiereToSave = {};
      const paramsFromModal = [...params];
      paramsFromModal.map(item => premiereToSave[item.Id] = item.value);

      // tslint:disable-next-line: no-string-literal
      premiereToSave['Cod_pelicula'] = this.premieresForecastSelected.id_movie;

      this.premiersService.postPremiereParameterized(
        { Value: premiereToSave },
        this.week,
        this.premieresForecastSelected.id_movie
      ).subscribe((response: Premiere) => {
        const res = { ...response };
        delete res.params;
        this.premiereToGenerateForecast.Inputs.push(res);
      }, error => { });
    });
  }

  /**
   * Get weeks
   */
  getWeeks() {
    this.weeksService.getWeeks(this.date).subscribe((response: WeeksResponse) => {
      this.week = Number(response.num_semana);
    }, error => { });
  }

  /**
   * Load premieres and cities data
   */
  loadData() {
    this.getPremiers();
    this.getCities();
  }

  /**
   * Get premieres
   */
  getPremiers() {
    this.premiersService.getPremiers(this.week).subscribe((response: PremiersResponse) => {
      this.premieres = response.value;
      this.premieres.map(premiere => premiere.checked = false);
    }, error => { });
  }

  /**
   * Get cities
   */
  getCities() {
    this.citiesService.getCities().subscribe((response: CitiesResponse) => {
      this.cities = response.value;
    }, error => { });
  }

  /**
   * Save premiere forecast
   */
  savePremiereForecast() {
    const premiereSelected: PremiereSelected[] = [];
    this.premieresListSelected.map(
      premiere => premiereSelected.push({ num_semana: String(this.week), id_pelicula: premiere })
    );
    this.premiersService.postAddForecastPremier(premiereSelected).subscribe((response: SuccessReponse) => {
      this.showParamsSection = response.Result === 'OK';
      if (this.showParamsSection) {
        this.getPremiereForecast();
      }
    }, error => { });
  }

  /**
   * Get premiere forecast
   */
  getPremiereForecast() {
    this.premiersService.getForecastPremiers(this.citySelected.id, this.week).subscribe((response: GetPremieresForecast) => {
      this.premieresForecast = response.value;
    });
  }

  /**
   * Generate forecast
   */
  generateForecast() {
    this.premiersService.postGenerateForecast(this.premiereToGenerateForecast).subscribe(response => {
      this.router.navigateByUrl('/generated/' + response.cod_forecast);
    }, error => { });
  }
}
