import { Injectable } from '@angular/core';
import { Router }  from '@angular/router';
import {WebStorageService} from "../web-storage.service";
import {LocalStorageService} from 'ng2-webstorage';

@Injectable()
export class AuthService {

	 constructor(
    private router: Router,public storage:LocalStorageService,public webstorage: WebStorageService){}
 
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(form){
    if(form.value.authid==="admin" && form.value.password==="root"){	
      this.storage.store('isLoggedIn',true);
        if(form.value.rememberMe){
          this.storage.store('authid',form.value.authid);
          this.storage.store('password',form.value.password);
          this.storage.store('rememberMe',form.value.rememberMe);
        }else{
          this.storage.clear('authid');
          this.storage.clear('password');
          this.storage.clear('rememberMe');
        }
      console.log(this.webstorage.isLoggedIn+"from (login) auth.services ");
      return true;
		}
	}

  logout() {
    this.storage.clear('isLoggedIn');
    this.router.navigate(['/login']);
    console.log(this.webstorage.isLoggedIn+ " from (logout) auth.services");
  }

}