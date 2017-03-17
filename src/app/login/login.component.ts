import { Component }   from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';
import {WebStorageService} from "../web-storage.service";
@Component({
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {
  message: string;
  constructor(public authService: AuthService,public webstorage:WebStorageService, public router: Router) {
  
  }
  
  login(form:NgForm){

   
    if(this.authService.login(form)){
       this.router.navigate(['/home']);
       // console.log("Redirection!");
    }else{

     console.log("L'identifiant ou le mot de passe sont incorrectes.")
  }
}

}