import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, NavigationEnd } from '@angular/router';

import { APP_CONSTANTS } from '@app/app.constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  menuItems = [
    {
      label: 'Planificar',
      disabled: false,
      expanded: true,
      items: [
        {
          label: 'Actualizar Estrenos',
        },
        {
          label: 'Extraer estrenos'
        },
        {
          label: 'Actualizar Cont. Alt.'
        },
        {
          label: 'Extraer Cont. Alt.'
        },
        {
          label: 'Forecast estrenos',
          route: '/define'
        },
        {
          label: 'Generar Forecast',
          route: '/generated'
        }
      ]
    },
    {
      label: 'Ejecutar',
      disabled: true,
      expanded: false,
    },
    /*{
      label: 'Controlar',
      disabled: true,
      expanded: false,
    }*/
  ];
  constructor(
  ) {
  }

  ngOnInit() {
  }
}
