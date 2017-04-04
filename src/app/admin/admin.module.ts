import{NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import{ReactiveFormsModule} from '@angular/forms';

import{AdminComponent} from './admin.component';
import{CustomizedObjectComponent} from './customized-object.component';
import{CreateObjectComponent} from './create-object.component';
import{UpdateObjectComponent} from './update-object.component';
import { AddStringComponent } from './add-string.component';


import{AdminRoutingModule} from './admin-routing.module';

import{MyBuildingFormsService} from './my-building-forms.service';
import { ObjectBuilderService  } from './object-builder.service';

import { PipeModule } from '../pipe/pipe.module'; 


@NgModule({
	declarations:[
		AdminComponent,
		CustomizedObjectComponent,
		CreateObjectComponent,
		UpdateObjectComponent,
		AddStringComponent
		],
	imports:[AdminRoutingModule, ReactiveFormsModule,CommonModule,PipeModule],
	providers:[MyBuildingFormsService,ObjectBuilderService]
})

export class AdminModule{}