import { Component, OnInit, Inject} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { ParamsService } from '@services/params/params.service';
import { PremiereForecast } from '@interfaces/premiersForecast';
import { Day, Param } from '@interfaces/params';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  params: Param[] = [];
  premiere: PremiereForecast;
  validators = [
    {
      id: 0,
      name: 'Temporada de vacaciones',
      checked: false
    }
  ];
  days: Day[] = [
    {
      id: 4,
      label: 'J',
      name: 'Jueves',
      checked: false
    },
    {
      id: 5,
      label: 'V',
      name: 'Viernes',
      checked: false
    },
    {
      id: 6,
      label: 'S',
      name: 'Sábado',
      checked: false
    },
    {
      id: 0,
      label: 'D',
      name: 'Domingo',
      checked: false
    },
    {
      id: 1,
      label: 'L',
      name: 'Lunes',
      checked: false
    },
    {
      id: 2,
      label: 'M',
      name: 'Martes',
      checked: false
    },
    {
      id: 3,
      label: 'M',
      name: 'Miércoles',
      checked: false
    }
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PremiereForecast,
    private translate: TranslateService,
    private paramsService: ParamsService
  ) {
    this.premiere = data;
    this.paramsService.getParams().subscribe(response => {
      this.params = response.Value;
      this.params.map((param) => {
        param.value = param.type === 'text' ? '' : [];
        if (param.type === 'days') {
          param.days = [ ...this.days ];
        }
      });
    }, error => {});
  }

  ngOnInit() {}

  OnChange(data: string[], index: string, paramIndex: number) {
    if (!data.includes(String(index))) {
      data.push(String(index));
    } else {
      const valuesToRemove = data.find(itemToFind => itemToFind === String(index));
      this.params[paramIndex].value = data.filter(item => !valuesToRemove.includes(item));
    }
  }
}
