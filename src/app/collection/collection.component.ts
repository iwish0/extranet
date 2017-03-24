import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';
import{CollectionService} from './collection.service';
import{Collection} from './collection';

import {WebStorageService} from "../web-storage.service";

import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {

  constructor(private webstorage:WebStorageService,private activatedRoute: ActivatedRoute, private collectionService:CollectionService) { }



  type:string;
  subMenu1:boolean=false;
  private errorMessage:string;
  private collections:Collection[];
  private addition:number;

  ngOnInit() {
  	// subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.type = params['type'];
        console.log(this.type+ "sfsfd");
      });

      this.getWSRest();
      // this.getWSSoap(38,9);
     // this.getFile();
  }

  getWSRest() {
    this.collectionService.getData()
             .subscribe(
                result=> this.collections = result,
                error =>  this.errorMessage = <any>error
             );
                console.log(this.errorMessage);
  }

  // getWSSoap(arg,arg2){
  //   this.collectionService.getAddOperation(arg,arg2)
  //              .subscribe(
  //                 result=> this.addition=result,
  //                 error =>  this.errorMessage = <any>error
  //               );
  //              console.log(this.errorMessage);
  // }

  // getFile(){
  // this.collectionService.downloadPDF().subscribe(
  //       res => {
  //           console.log(res + "reponse !!!");
  //           FileSaver.saveAs(res, "ang.mp4"); //if you want to save it - you need file-saver for this : https://www.npmjs.com/package/file-saver

  //       var fileURL = URL.createObjectURL(res);
  //       window.open(fileURL); // if you want to open it in new tab

  //       }
  //   );
  //  }
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
        url:'/collection/add-discussion'
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
