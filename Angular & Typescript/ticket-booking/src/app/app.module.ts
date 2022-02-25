import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { MiddleContainerComponent } from './components/middle-container/middle-container.component';
import { MainBannerComponent } from './components/middle-container/main-banner/main-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MainContentComponent } from './components/middle-container/main-content/main-content.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PremierListComponent } from './components/premier-list/premier-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleContainerComponent,
    MainBannerComponent,
    FooterComponent,
    MainContentComponent,
    MovieListComponent,
    PremierListComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
