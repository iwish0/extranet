import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydocushare',
  templateUrl: './mydocushare.component.html',
  styleUrls: ['./mydocushare.component.css']
})
export class MydocushareComponent implements OnInit {
	
	public collections:String[]=['Initial Top Level Collection A','Initial Top Level Collection B','Initial Top Level Collection C','Initial Top Level Collection D'];
	public subMenu:boolean=false;
	public index;
	public displayOption:string[]=['Aucun','Tout','Blogue Web','Calendrier','Collection','Courrier électronique','Discussion','Document','Entrée de blogue Web','Événement','Page Wiki','Requête enregistrée','Sujet','URL','Wiki'];
	
	constructor(){}

	ngOnInit(){}

	onClickSubMenu(index){
  		this.subMenu=!this.subMenu;
  		this.index=index;
  	}
  
}
