import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';




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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ListeLangageComponent,
    ListeLinkComponent,
    LangageLinkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
