import{NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import{CommonModule} from '@angular/common';
import{ReactiveFormsModule} from '@angular/forms';
import {PopoverModule} from "ng2-popover";
import { MyDatePickerModule } from 'mydatepicker';

import{CollectionComponent} from './collection.component';
import{AddDocumentFormComponent} from './add-document-form.component';
import{AddDiscussionFormComponent} from './add-discussion-form.component';

import{CollectionService} from './collection.service';

import{CollectionRoutingModule} from './collection-routing.module';

@NgModule({
   declarations: [
     CollectionComponent,
     AddDocumentFormComponent,
     AddDiscussionFormComponent
   ],
   imports: [
     FormsModule,
     HttpModule,
     RouterModule,
     CommonModule,
     CollectionRoutingModule,
     ReactiveFormsModule,
     PopoverModule,
     MyDatePickerModule
   ],
   providers:[CollectionService]

 })
 
export class CollectionModule{}