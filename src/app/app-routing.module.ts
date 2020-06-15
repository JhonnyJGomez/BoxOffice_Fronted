import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '@app/features/not-found/not-found.component';
import { MainComponent } from '@app/layous/main/main.component';
import { HomeComponent } from '@app/features/home/home.component';
import { APP_CONSTANTS } from '@app/app.constants';
import { GeneratedComponent } from './features/generated/generated.component';

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
