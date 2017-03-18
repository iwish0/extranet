import { Component, OnInit } from '@angular/core';
import{WebStorageService} from '../web-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public webstorage:WebStorageService) { }

  ngOnInit() {
  }
  carrouselImages:String[]=['../../assets/images/docushare_1.png','../../assets/images/docushare_2.png','../../assets/images/docushare_3.png','../../assets/images/docushare_4.png','../../assets/images/docushare_5.png'];
  collections:String[]=['Initial Top Level Collection A','Initial Top Level Collection B','Initial Top Level Collection C','Initial Top Level Collection D'];

  news:String[]=[
      'Au cours de l\'heure précédente',
      'Aujourd\'hui',
      'Au cours des 2 derniers jours',
      'Au cours des 3 derniers jours',
      'Au cours des 4 derniers jours',
      'Depuis ma demande précédente'
  ];
}
