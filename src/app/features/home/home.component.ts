import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONSTANTS } from '@app/app.constants';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModalComponent } from '@components/modal/modal.component';
import { WeeksService } from '@services/weeks/weeks.service';
import { PremiersService } from '@services/premiers/premiers.service';
import { CitiesService } from '@services/cities/cities.service';

import {
  WeeksResponse,
  PremiersResponse,
  Premiere,
  CitiesResponse,
  Citiy,
  SuccessReponse,
  PremiereSelected,
  GetPremieresForecast,
  PremiereForecast
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
  cities: Citiy[] = [];
  premieresListSelected: string[];
  showParamsSection = false;
  premieresForecast: PremiereForecast[] = [];
  premiereToAddParams: Premiere;
  premiereToGenerateForecast = {
    Inputs: [],
    GlobalParameters: {}
  };

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
    dialogConfig.data = this.premiereToAddParams;
    dialogConfig.width = '700px';
    dialogConfig.height = '560px';
    console.log(this.premiereToAddParams)
    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(params => {
      const premiereToSave = {};
      const paramsFromModal = [...params];
      paramsFromModal.map(item => premiereToSave[item.Id] = item.value);

      // tslint:disable-next-line: no-string-literal
      premiereToSave['Cod_pelicula'] = this.premiereToAddParams.Cod_pelicula;
      const premiereFound = { ...this.premieres.find(premire => premire.Cod_pelicula === this.premiereToAddParams.Cod_pelicula) }
      premiereFound.ReleaseDate = this.date;
      this.premiereToGenerateForecast.Inputs.push(premiereFound);

      this.premiersService.postPremiereParameterized({Value: premiereToSave}, this.week).subscribe(response => {
        console.log(response);
        // TODO: remove items of dropdown
      }, error => { });
    });
  }

  /**
   * Get weeks
   */
  getWeeks() {
    this.weeksService.getWeeks(this.date).subscribe((response: WeeksResponse) => {
      setTimeout(()=>{ this.week = Number(response.num_semana) }, 1000)
      //this.week = Number(response.num_semana);
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
/*     this.premieresListSelected.map(
      premiere => premiereSelected.push({ num_semana: String(this.week), id_pelicula: premiere })
    ); */
    this.premiersService.postAddForecastPremier(premiereSelected).subscribe((response: SuccessReponse) => {
      this.showParamsSection = response.Result === 200;
      if (this.showParamsSection) {
        this.getPremiereForecast();
      }
    }, error => { });
  }

  /**
   * Get premiere forecast
   */
  getPremiereForecast() {
    this.premiersService.getForecastPremiers().subscribe((response: GetPremieresForecast) => {
      setTimeout(()=>{ this.premieresForecast = response.Value }, 2000)
      //this.premieresForecast = response.Value;
    });
  }

  /**
   * Generate forecast
   */
  generateForecast() {
    this.premiersService.postGenerateForecast(this.premiereToGenerateForecast).subscribe(() => {
      this.router.navigateByUrl('/generated');
    }, error => {});
  }
}
