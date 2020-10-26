import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { Cinema } from '@interfaces/cinema';
import { CinemaService } from '@services/cinema/cinema.service';
import { CitiesService } from '@services/cities/cities.service';
import { City } from '@interfaces/cities';
import { GenerateScheduleData } from '@interfaces/schedule';
import { isArray } from 'util';
import { ModalProgramsComponent } from '@components/modal-programs/modal-programs.component';
import { ParamProgramItem, ParamProgramToSave } from '@interfaces/paramsPrograms';
import { PremiereForecast } from '@interfaces/premiersForecast';
import { PremiersService } from '@services/premiers/premiers.service';
import { ScheduleService } from '@services/schedule/schedule.service';
import { WeeksService } from '@services/weeks/weeks.service';

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
  cinemaSelected: Cinema;
  cinemas: Cinema[];
  displayedColumns: string[] = ['movies', 'prediction']; // TODO: agregar 'participation' si es nececario y descomentar el HTML
  premieresForecast: PremiereForecast[];
  paramsValues: ParamProgramItem[];
  paramProgramToSave: ParamProgramToSave = {
    value: []
  };
  showGenerateButton = false;
  saveForecastData: GenerateScheduleData;

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
    this.weeksService.getWeeks(this.date).subscribe(response => {
      this.week = Number(response.num_semana);
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
   * Get cinemas
   */
  getCinemas() {
    this.cinemaService.getCinemas(this.citySelected.id).subscribe(response => {
      this.cinemas = response.value;
    }, error => {
      console.log('Error:', error);
    });
  }

  /**
   * Get premiere forecast
   */
  getPremiereForecast() {
    this.premiersService.getForecastPremiers(this.citySelected.id, this.week).subscribe(response => {
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

    dialogRef.afterClosed().subscribe((params: ParamProgramItem[]) => {
      if (params.length > 0) {
        params.map(item => {
          if (isArray(item.value)) {
            item.value = item.value[0] ? true : '';
          } else {
            item.value = String(item.value || '');
          }

          this.paramProgramToSave.value.push({
            cod_forecast: this.premieresForecast[0].cod_forecast,
            id_parametro: Number(item.id),
            value: item.value
          });
        });

        this.saveParamsProgram();
      }
    });
  }

  /**
   * Save params program
   */
  saveParamsProgram() {
    this.scheduleService.saveParamsProgram(this.paramProgramToSave).subscribe(response => {
      this.showGenerateButton = true;
    }, error => {
      console.log('Error:', error);
    });
  }

  /**
   * Generate schedule
   */
  generateSchedule() {
    const cod_forecast = this.premieresForecast[0].cod_forecast;
    const premieresForecastIds = this.premieresForecast.map(premiereForecast => premiereForecast.id_movie);
    this.router.navigateByUrl(
      `/view-schedule/${cod_forecast}/${this.week}/${this.cinemaSelected.id}/${premieresForecastIds.toString()}`
    );
  }
}
