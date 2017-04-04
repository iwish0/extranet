import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { CapitalizeFirstPipe } from './capitalize-first.pipe'; 

import { SanitizeHtmlPipe } from './sanitize-html.pipe'; 


@NgModule({
  declarations:[ CapitalizeFirstPipe,SanitizeHtmlPipe],
  imports:[CommonModule],
  exports:[ CapitalizeFirstPipe,SanitizeHtmlPipe]
})

export class PipeModule{}