import { Component, OnInit, Inject} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { ParamsService } from '@services/params/params.service';
import { ParamProgram, ParamsProgramResponse } from '@interfaces/response';
import { PremiereForecast } from '@interfaces/premiersForecast';

@Component({
  selector: 'app-modal-programs',
  templateUrl: './modal-programs.component.html',
  styleUrls: ['./modal-programs.component.scss']
})
export class ModalProgramsComponent implements OnInit {
  params: ParamProgram[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PremiereForecast,
    private translate: TranslateService,
    private paramsService: ParamsService
  ) {
    this.paramsService.getParamsPrograms().subscribe((response: ParamsProgramResponse) => {
      this.params = response.value;
    }, error => {});
  }

  ngOnInit() {}
}
