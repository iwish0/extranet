import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {Ng2Webstorage} from 'ng2-webstorage';

import {WebStorageService} from './web-storage.service';
import {AuthService} from './login/auth.service'


import { LoginModule } from './login/login.module';
import { CollectionModule } from './collection/collection.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import{CollectionComponent} from './collection/collection.component';
import { MydocushareComponent } from './mydocushare/mydocushare.component';

@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
    // CollectionComponent,
    MydocushareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    Ng2Webstorage,
    LoginModule,
    CollectionModule
  ],
  providers: [AuthService,WebStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
