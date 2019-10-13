import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CustomMaterialModule} from "./modules/custom-material/custom-material.module";
import 'hammerjs';
import { HomeComponent } from './components/home/home.component';
import {routing} from './app.routing';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAccountComponent} from './components/my-account/my-account.component';
import {LoginService} from './services/login.service';
import {UserService} from './services/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SubmitCarAddComponent } from './components/submit-car-add/submit-car-add.component';
import {CarAdService} from './services/car-ad.service';
import {AppAdService} from './services/app-ad.service';
import {LabelService} from './services/helper/label.service';
import {GivefreeService} from './services/givefree.service';

import {CarmakeService} from './services/helper/carmake.service';
import {UploadImageService} from './services/upload-image.service';
import {EmailHelperService} from './services/helper/email-helper.service';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { CaradListComponent } from './components/carad-list/carad-list.component';
import { CaradDetailComponent } from './components/carad-detail/carad-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
// ********************** angular-modal-gallery *****************************
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { ModalGalleryModule } from 'angular-modal-gallery';
import { SendMailComponent } from './components/send-mail/send-mail.component';
import { GoogleMapComponent } from './components/google-map/google-map.component'; // <----------------- angular-modal-gallery library import
// **************************************************************************
import { AgmCoreModule } from '@agm/core';
import { ResultComponent } from './components/result/result.component';
import {GoogleMapService} from './services/google-map.service';
// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SubmitAppAdComponent } from './components/submit-app-ad/submit-app-ad.component';
import { AppadListComponent } from './components/appad-list/appad-list.component';
import { AppadDetailComponent } from './components/appad-detail/appad-detail.component';
import { CaradSearchComponent } from './components/carad-search/carad-search.component';
import { PostAdComponent } from './components/post-ad/post-ad.component';
import { GivefreeListComponent } from './components/givefree-list/givefree-list.component';
import { GivefreeDetailComponent } from './components/givefree-detail/givefree-detail.component';
import { SubmitFreeAddComponent } from './components/submit-free-add/submit-free-add.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyProfileComponent,
    SubmitCarAddComponent,
    UploadImageComponent,
    CaradListComponent,
    CaradDetailComponent,
    SendMailComponent,
    GoogleMapComponent,
    ResultComponent,
    SubmitAppAdComponent,
    AppadListComponent,
    AppadDetailComponent,
    CaradSearchComponent,
    PostAdComponent,
    GivefreeListComponent,
    GivefreeDetailComponent,
    SubmitFreeAddComponent

  ],
  imports: [
    routing,
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ModalGalleryModule.forRoot(),
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyBiupLsev3b4hiWT94ixnwTLzrIpFMyyVU'
   }),
   TranslateModule.forRoot({
           loader: {
               provide: TranslateLoader,
               useFactory: HttpLoaderFactory,
               deps: [HttpClient]
           }
       })
  ],
  providers: [LoginService,
              UserService,
              CarAdService,
              AppAdService,
              CarmakeService,
              UploadImageService,
              GoogleMapService,
              EmailHelperService,
              LabelService,
              GivefreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
