import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { ChartJsComponent } from './modules/views/chart-js/chart-js.component';
import { I18nAngularComponent } from './modules/views/i18n-angular/i18n-angular.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'chartjs',
    component: ChartJsComponent
  },
  {
    path: 'i18n-angular',
    component: I18nAngularComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
