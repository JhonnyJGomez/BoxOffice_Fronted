import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { CinemaService } from '@services/cinema/cinema.service';
import { CitiesService } from '@services/cities/cities.service';
import { ModalProgramsComponent } from '@components/modal-programs/modal-programs.component';
import { PremiersService } from '@services/premiers/premiers.service';
import { ScheduleService } from '@services/schedule/schedule.service';
import { WeeksService } from '@services/weeks/weeks.service';
import {
  Cinema,
  CinemaResponse,
  CitiesResponse,
  City,
  GetPremieresForecast,
  ParamProgram,
  ParamProgramToSave,
  PremiereForecast,
  SaveForecastData,
  WeeksResponse
} from '@interfaces/response';
import { isArray } from 'util';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  date: string;
  week: number;
  ticket: string;
  cities: City[];
  citySelected: City;
  cinemaSelected: Cinema = {
    cod_ciudad: null,
    id: '',
    nom_cine: '',
    ticket_promedio: null
  };
  cinemas: Cinema[];
  displayedColumns: string[] = ['movies', 'prediction', 'participation'];
  premieresForecast: PremiereForecast[];
  paramsValues: ParamProgram[];
  paramProgramToSave: ParamProgramToSave = {
    value: []
  };
  showGenerateButton = false;
  saveForecastData: SaveForecastData = {
    forecast: null
  };

  constructor(
    private cinemaService: CinemaService,
    private citiesService: CitiesService,
    private premiersService: PremiersService,
    private weeksService: WeeksService,
    private scheduleService: ScheduleService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getCities();
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
   * Get cities
   */
  getCities() {
    this.citiesService.getCities().subscribe((response: CitiesResponse) => {
      this.cities = response.value;
    }, error => { });
  }

  /**
   * Get cinemas
   */
  getCinemas() {
    this.cinemaService.getCinemas(this.citySelected.id).subscribe((response: CinemaResponse) => {      
      this.cinemas = response.value;
    }, error => { });
  }

  /**
   * Get premiere forecast
   */
  getPremiereForecast() {
    this.premiersService.getForecastPremiers(this.citySelected.id, this.week).subscribe((response: GetPremieresForecast) => {
      this.premieresForecast = response.Value;
    });
  }

  /**
   * Open modal programs
   */
  openModalForPrograms() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '700px';
    dialogConfig.height = '560px';
    const dialogRef = this.dialog.open(ModalProgramsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((params: ParamProgram[]) => {
      params.map(item => {
        if (isArray(item.value)) {
          item.value = !!item.value[0];
        } else {
          item.value = String(item.value);
        }

        this.paramProgramToSave.value.push({
          id_forecast: this.premieresForecast[0].id_forecast,
          id_parametro: Number(item.Id),
          value: item.value
        });
      });

      this.saveParamsProgram();
    });
  }

  /**
   * Save params program
   */
  saveParamsProgram() {
    this.scheduleService.saveParamsProgram(this.paramProgramToSave).subscribe(response => {
      this.showGenerateButton = true;
    }, error => {});
  }

  /**
   * Generate schedule
   */
  generateSchedule() {
    this.saveForecastData.forecast = this.premieresForecast[0].id_forecast;
    this.scheduleService.generateSchedule(this.saveForecastData).subscribe(response => {
      if (response.status === 'Generated') {
        this.router.navigateByUrl('/view-schedule/' + response.cod_forecast);
      } else {
        console.log('Un error ha ocurrido generando la programación');
      }
    }, error => {});
  }
}
