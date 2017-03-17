import {Injectable} from '@angular/core';
import {LocalStorage} from 'ng2-webstorage'

@Injectable()
export class WebStorageService {
   /* mainly for login.component */
   @LocalStorage() public isLoggedIn;
      @LocalStorage() public authid;
         @LocalStorage() public password;
            @LocalStorage() public rememberMe;

   constructor() {}
}