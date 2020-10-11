
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
  idWeek: number;
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
    
    console.log("this.premieresForecastSelected--> ", this.premieresForecastSelected);
    dialogConfig.width = '700px';
    dialogConfig.height = '560px';
    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
    
    console.log("dialogConfig.data: ",dialogConfig.data);
    
    dialogRef.afterClosed().subscribe(params => {

      console.log("dentro de afterClosed");
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
      this.idWeek = response.id;

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
   * Get premieres after selected weeks.
   */

  getPremiers() {
    
    this.premiersService.getPremiers(this.idWeek).subscribe((response: PremiersResponse) => {
      this.premieres = response.value;
      this.premieres.map(premiere => premiere.checked = false);
    }, error => { });
  }
   
  /**
   * Get cities
   */
  getCities() {

    this.citiesService.getCities().subscribe((response: CitiesResponse) => {
      console.log("response -->",response)
      this.cities = response.value; 
      console.log("response.value -->",this.cities)
    }, error => { });
  }

  /**
   * Save premiere forecast
   */
  savePremiereForecast() {
    console.log("save premiere forecast");
    const premiereSelected: PremiereSelected[] = [];
    
    this.premieresListSelected.map(
      premiere => premiereSelected.push({ id_semana: String(this.idWeek), id_pelicula: premiere, id_ciudad: Number(this.citySelected.id)})
    );
    this.premiersService.postAddForecastPremier(premiereSelected).subscribe((response: SuccessReponse) => {
      this.showParamsSection = response.Result === 'OK';
      if (this.showParamsSection) {
        this.getPremiereForecast();
      }
    }, error => {error });
  }

  /**
   * Get premiere forecast for the parametrization 
   */


  getPremiereForecast() {
    console.log("Entra a get premieresForecast");
    
    this.premiersService.getForecastPremiers(this.citySelected.id, this.idWeek).subscribe((response: GetPremieresForecast) => {
      
      console.log("response 2-->", response);

      this.premieresForecast = response.Value;
      console.log("this.premieresForecast 2-->", this.premieresForecast);
    }, error =>{
      console.log("error Get Premier Forecast", error);
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
