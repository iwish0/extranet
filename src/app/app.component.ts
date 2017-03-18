import { Component,OnInit } from '@angular/core';
import {AuthService} from './login/auth.service';
import{WebStorageService} from './web-storage.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
	
  constructor(private router: Router,public authservice:AuthService,public webstorage:WebStorageService){
		console.log(this.webstorage.isLoggedIn+ "from app.component");
	}

  ngOnInit(){
     this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
  }

  logout(){
		this.searchMenu=false;
		this.authservice.logout();
	}
  
	dropdown1:String[]=[
	  'Toutes les parties',
	  'Titre, Sommaire, Description, Mots-clés, Contenu',
	  'Titre, Sommaire, Description, Mots-clés',
	  'Mots clés seulement',
	  'Propriétaire seulement'
  	]

  	dropdown2:String[]=[
  		'Tous les types d\'objets',
  		'Documents et collections',
  		'Calendriers et événements',
  		'Blogues et Wikis',
  		'Discussion et sujets',
  		'Utilisateurs et groupes',
  		'Collections seulement',
  		'Documents seulement'
  	];

  	dropdown3:String[]=[
  		'5','20','100','250','500','1000'];
	
	dropdown4:String[]=[
  		'Aucun',
  		'Aujourd\'hui',
  		'Depuis hier',
  		'Dans la dernière semaine',
  		'Dans les deux dernières semaines',
  		'Dans le dernier mois',
  		'Dans les deux derniers mois',
  		'Dans les six derniers mois',
  		'Dans l\'année'
  	];

  	dropdown5:String[]=[
  		'Tous les types de documents',
  		'Microsoft Office (Word,Excel,PowerPoint)',
  		'Microsoft Word',
  		'Microsoft PowerPoint',
  		'Microsoft Excel',
  		'Adobe PDF (.pdf)',
  		'Tout documents d\'image'
  	];

  	dropdown6:String[]=[
  		'Classement',
  		'Par titre',
  		'Par date',
  		'Par date ascendante',
  		'Par type et titre',
  		'Par type et date',
  		'Par titre, inversé',
  		'Par propriétaire'
  		
  	];    

  	searchMenu:boolean=false;

  	onClickSearMenuLink(){
  		this.searchMenu=!this.searchMenu;
  	}  		
}
