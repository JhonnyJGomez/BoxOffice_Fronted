import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneratedComponent } from '@app/features/generated/generated.component';
import { HomeComponent } from '@app/features/home/home.component';
import { MainComponent } from '@app/layous/main/main.component';
import { NotFoundComponent } from '@app/features/not-found/not-found.component';
import { ScheduleComponent } from '@app/features/schedule/schedule.component';
import { ViewScheduleComponent } from '@app/features/view-schedule/view-schedule.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/define',
        pathMatch: 'full'
      },
      {
        path: 'define',
        component: HomeComponent
      },
      {
        path: 'generated',
        component: GeneratedComponent
      },
      {
        path: 'generate-schedule',
        component: ScheduleComponent
      },
      {
        path: 'view-schedule/:forecast',
        component: ViewScheduleComponent
      }
    ]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
