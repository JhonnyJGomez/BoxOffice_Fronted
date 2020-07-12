import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '@app/features/not-found/not-found.component';
import { MainComponent } from '@app/layous/main/main.component';
import { HomeComponent } from '@app/features/home/home.component';
import { GeneratedComponent } from './features/generated/generated.component';
import { ScheduleComponent } from './features/schedule/schedule.component';

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
