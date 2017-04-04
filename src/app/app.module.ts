import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {Ng2Webstorage} from 'ng2-webstorage';

import { PipeModule } from './pipe/pipe.module'; 

import {WebStorageService} from './web-storage.service';
import {AuthService} from './login/auth.service'
import{ObjectService} from './system-object.service';


import { LoginModule } from './login/login.module';
import { CollectionModule } from './collection/collection.module';
import { AdminModule } from './admin/admin.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MydocushareComponent } from './mydocushare/mydocushare.component';



@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
    MydocushareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    Ng2Webstorage,
    LoginModule,
    CollectionModule,
    AdminModule,
    PipeModule
  ],
  providers: [AuthService,WebStorageService,ObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
