import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }            from '../login/auth-guard.service';

import { AdminComponent }       from './admin.component';
import { CustomizedObjectComponent }       from './customized-object.component';
import { CreateObjectComponent }       from './create-object.component';
import { AddStringComponent } from './add-string.component';

const AdminRoutes: Routes = [
  { path: 'admin',component:AdminComponent,canActivate: [AuthGuard],
  	children:[
      
  		// {
  		// 	path:'',component:AdminComponent
  		//  },
  		{
  	   	path:'create-object',component:CreateObjectComponent
  		 }
       ,
       {
         path:'add-string',component:AddStringComponent
       }
       //,{
    //     path:'add-discussion',component:AddDiscussionFormComponent
    //   }

  	]

   }
];

@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}