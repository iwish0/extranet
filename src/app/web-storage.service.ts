import {Injectable} from '@angular/core';
import {LocalStorage,SessionStorage} from 'ng2-webstorage'

@Injectable()
export class WebStorageService {
   /* mainly for login.component */
   @LocalStorage() public isLoggedIn;
      @LocalStorage() public authid;
         @LocalStorage() public password;
            @LocalStorage() public rememberMe;

    @SessionStorage() public fileName;
       @SessionStorage() public fileDate;
          @SessionStorage() public fileSize;
             @SessionStorage() public fileType;

   constructor() {}
}