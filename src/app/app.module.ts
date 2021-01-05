import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListeLangageComponent } from './liste-langage/liste-langage.component';
import { ListeLinkComponent } from './liste-link/liste-link.component';

/**
 * Mes import
 * Module pour slick carousel
 * https://www.npmjs.com/package/ngx-slick-carousel
 */
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LangageLinkComponent } from './langage-link/langage-link.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { AdminLangageComponent } from './admin-langage/admin-langage.component';
import { AdminComponent } from './admin/admin.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { SingleLangageComponent } from './single-langage/single-langage.component';
import { AdminLinkComponent } from './admin-link/admin-link.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ListeLangageComponent,
    ListeLinkComponent,
    LangageLinkComponent,
    ConnexionComponent,
    HomeComponent,
    AdminLangageComponent,
    AdminComponent,
    AddLinkComponent,
    SingleLangageComponent,
    AdminLinkComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
    RouterModule.forRoot([
      /**
       * Route de mon site
       */
      { path: '', component: HomeComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'admin/langage', component: AdminLangageComponent },
      { path: 'admin/link', component: AdminLinkComponent },
      { path: 'langage/:id', component: SingleLangageComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
