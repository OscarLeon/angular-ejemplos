import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// NGXS
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";

//Translation
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { NavbarComponent } from "./layouts/navbar/navbar.component";
import { HomeComponent } from "./layouts/home/home.component";
import { ChartJsComponent } from "./modules/views/chart-js/chart-js.component";
import { I18nAngularComponent } from "./modules/views/i18n-angular/i18n-angular.component";
import { ListarPostsComponent } from "./modules/views/listar-posts/listar-posts.component";
import { NuevoPostComponent } from "./modules/views/nuevo-post/nuevo-post.component";
import { ContenedorPostsComponent } from "./modules/views/contenedor-posts/contenedor-posts.component";
import { environment } from "src/environments/environment";
import { PostsState } from "./store/posts/posts.state";

import { ScrollingModule } from "@angular/cdk/scrolling";
import { VirtualScrollComponent } from "./modules/views/virtual-scroll/virtual-scroll.component";
import { ChallengerBciComponent } from "./modules/views/challenger-bci/challenger-bci.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ChartJsComponent,
    I18nAngularComponent,
    ListarPostsComponent,
    NuevoPostComponent,
    ContenedorPostsComponent,
    VirtualScrollComponent,
    ChallengerBciComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ScrollingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient],
      },
    }),

    // NGXS
    NgxsModule.forRoot([PostsState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
