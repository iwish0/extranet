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
import { AddCustomizedContentFormComponent }  from './add-customized-content-form.component';
import { DynamicFormComponent }  from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent }  from './dynamic-form/dynamic-form-question.component';



import { PipeModule } from '../pipe/pipe.module'; 

import{CollectionService} from './collection.service';
import{SoapEnvelopeService} from './soap-envelope-service';
import { QuestionService }  from './dynamic-form/question.service';
import { QuestionControlService }  from './dynamic-form/question-control.service';


import{CollectionRoutingModule} from './collection-routing.module';

@NgModule({
   declarations: [
     CollectionComponent,
     AddDocumentFormComponent,
     AddDiscussionFormComponent,
     AddCustomizedContentFormComponent,
     DynamicFormComponent ,
     DynamicFormQuestionComponent

   ],
   imports: [
     FormsModule,
     HttpModule,
     RouterModule,
     CommonModule,
     CollectionRoutingModule,
     ReactiveFormsModule,
     PopoverModule,
     MyDatePickerModule,
     PipeModule
   ],
   providers:[CollectionService,SoapEnvelopeService,QuestionService,QuestionControlService]

 })
 
export class CollectionModule{}