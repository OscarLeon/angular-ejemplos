import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./layouts/home/home.component";
import { ChartJsComponent } from "./modules/views/chart-js/chart-js.component";
import { I18nAngularComponent } from "./modules/views/i18n-angular/i18n-angular.component";
import { ContenedorPostsComponent } from "./modules/views/contenedor-posts/contenedor-posts.component";
import { VirtualScrollComponent } from "./modules/views/virtual-scroll/virtual-scroll.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "chartjs",
    component: ChartJsComponent
  },
  {
    path: "i18n-angular",
    component: I18nAngularComponent
  },
  {
    path: "ngxs-example",
    component: ContenedorPostsComponent
  },
  {
    path: "virtual-scroll",
    component: VirtualScrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
