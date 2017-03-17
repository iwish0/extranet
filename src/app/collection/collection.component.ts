import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';
import{CollectionService} from './collection.service';
import{Collection} from './collection';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private collectionService:CollectionService) { }

  type:string;
  subMenu1:boolean=false;
  private errorMessage:string;
  private collections:Collection[];

  ngOnInit() {
  	// subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.type = params['type'];
        console.log(this.type+ "sfsfd");
      });

      this.getData();
  }

    getData() {
    this.collectionService.getData()
                     .subscribe(
                        result=> this.collections = result,
                       error =>  this.errorMessage = <any>error);
                     console.log(this.errorMessage);
  }


  onClickSubMenu(){
  	this.subMenu1=!this.subMenu1;

  }

  modifications:String[]=[
    'Ajouter aux favoris',
    'Changer d\'emplacement',
    'Changer de propriétaire',
    'Copier',
    'Copier les raccourcis',
    'Couper',
    'Supprimer',
    'Renommer',
    'Zip et téléchargement'
  ];

  addList=[
    {
      name:'Blogue Web',
       url:''
     },{
       name:'Calendrier',
        url:''
     },{
       name: 'Collection',
       url:''
     },{
       name: 'Discussion',
        url:''
     },{
       name:  'Document',
        url:'/collection/add-document'
     },{
       name:'URL',
        url:''
     },{
       name:  'Wiki',
        url:''
     }
  ];

}
