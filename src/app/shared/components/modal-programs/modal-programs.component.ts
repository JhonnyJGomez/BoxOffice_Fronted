import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ParamsService } from '@services/params/params.service';
import { ParamProgramItem } from '@interfaces/paramsPrograms';

@Component({
  selector: 'app-modal-programs',
  templateUrl: './modal-programs.component.html',
  styleUrls: ['./modal-programs.component.scss']
})
export class ModalProgramsComponent implements OnInit {
  params: ParamProgramItem[] = [];
  constructor(
    private translate: TranslateService,
    private paramsService: ParamsService
  ) {
    this.paramsService.getParamsPrograms().subscribe(response => {
      this.params = response.value;
    }, error => {
      console.log('Error:', error);
    });
  }

  ngOnInit() {}
}
