import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }            from '../login/auth-guard.service';

import { CollectionComponent }       from './collection.component';
import { AddDocumentFormComponent }       from './add-document-form.component';

const CollectionRoutes: Routes = [
  { path: 'collection',canActivate: [AuthGuard],
  	children:[
  		{
  			path:'',component:CollectionComponent
  		},
  		{
  			path:'add-document',component:AddDocumentFormComponent
  		}

  	]

   }
];

@NgModule({
  imports: [
    RouterModule.forChild(CollectionRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CollectionRoutingModule {}