import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { HeaderBottomComponent } from './components/header-bottom/header-bottom.component';
import { MiddleContainerComponent } from './components/middle-container/middle-container.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PremierListComponent } from './components/premier-list/premier-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookingMainComponent } from './components/booking-main/booking-main.component';
import { SeatsComponent } from './components/seats/seats.component';
import { SeatsHeaderComponent } from './components/seats-header/seats-header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    MiddleContainerComponent,
    MainBannerComponent,
    MainContentComponent,
    MovieListComponent,
    PremierListComponent,
    FooterComponent,
    BookingMainComponent,
    SeatsComponent,
    SeatsHeaderComponent,
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
