import { UserLoggingService } from './services/user-logging.service';
import { MaterialModule } from './material.module';

// import { AppartementsDb } from './services/appartements.db';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AppartementDetailComponent } from './appartement-detail/appartement-detail.component';
import { AppartementFormComponent } from './appartement-form/appartement-form.component';
import { AppartementListItemComponent } from './appartement-list-item/appartement-list-item.component';
import { AppartementsComponent } from './appartements/appartements.component';

import { DataService } from './services/Data.service';
import { AppartementListComponent } from './appartement-list/AppartementListComponent';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UsersListComponent } from './users-list/users-list.component';

import { IgxDatePickerModule } from 'igniteui-angular';
import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';
import { RgpdComponent } from './rgpd/rgpd.component';

import {NgbdDatepickerPopup} from './ngbd-datepicker-popup/ngbd-datepicker-popup.component'
import { from } from 'rxjs';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CookiesComponent } from './cookies/cookies.component';
import { AvisComponent } from './avis/avis.component';
import { PaiementComponent } from './paiement/paiement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppartementListComponent,
    PageNotFoundComponent,
    SearchBarComponent,
    FooterComponent,
    AppartementDetailComponent,
    AppartementFormComponent,
    AppartementListItemComponent,
    AppartementsComponent,
    UsersListComponent,
    NavbarComponent,
    UserProfileComponent,
    UserSignUpComponent,
    ContactComponent,
    PresentationComponent,
    RgpdComponent,

    NgbdDatepickerPopup,
    CookiesComponent,
    AvisComponent,
    PaiementComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IgxDatePickerModule,
    NgbModule
  ],
  providers: [DataService, UserLoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
