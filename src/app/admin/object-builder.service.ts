import{Injectable} from '@angular/core';
import { DropdownQuestion,TextboxQuestion,TextareaQuestion  } from '../collection/dynamic-form/question-type';

import {WebStorageService} from "../web-storage.service";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { MyObject } from './myobject';


@Injectable()
export class ObjectBuilderService{

  newObj=new MyObject();

  constructor(private _webstorage:WebStorageService){}

  // Observable string[] sources
  private _updateData = new Subject<string[]>();
  // Observable string[] streams
  updateData$ = this._updateData.asObservable(); //

	getAllBasicObjects(){
		 let objects=[
      new TextboxQuestion({
        key: 'objectname',
        label: '',
        value: 'document',
        required: true,
        type:'hidden',
        order: 0
      }),


      // new DropdownQuestion({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   order: 3
      // }),

      new TextboxQuestion({
        key: 'file',
        label: 'Votre fichier',
        value: '',
        required: true,
        type:'file',
        order: 1
      }),

         new TextboxQuestion({
        key: 'title',
        label: 'Titre',
        value: '',
        required: true,
        labelType:'string',
        order: 2
      }),

      new TextboxQuestion({
        key: 'summary',
        label: 'sommaire',
        value: '',
        required: false,
        type:'text',
        labelType:'string',
        order: 3
      }),
      new TextareaQuestion({
        key: 'description',
        label: 'description',
        value: '',
        required: false,
        type:'',
        labelType:'text',
        order: 4
      }),
      new TextboxQuestion({
        key: 'keywords',
        label: 'Mots-clés',
        value: '',
        required: false,
        type:'',
        labelType:'string',
        order: 5
      }),
      new TextboxQuestion({
        key: 'expirationDate',
        label: 'Date d\'expiration',
        value: '',
        required: false,
        type:'',
        order: 6
      }),
      new TextboxQuestion({
        key: 'versionsMax',
        label: 'Versions max',
        value: '',
        required: false,
        type:'',
        order: 7
      }),
      new TextboxQuestion({
        key: 'author',
        label: 'Auteur',
        value: '',
        required: false,
        type:'text',
        labelType:'string',
        order: 8
      }),
      new TextboxQuestion({
        key: 'acccesRights',
        label: 'Droits d\'accès initiaux',
        value: 'same',
        required: true,
        type:'radio',
        order: 9
      }),
      new TextboxQuestion({
        key: 'circulation',
        label: 'Circulation du document',
        value: false,
        required: true,
        type:'radio',
        order: 10
      }),
    ];
     return objects.sort((a, b) => a.order - b.order);
	}

  getObject(arg){
    if(this._webstorage.object){
       let object=JSON.parse(this._webstorage.object);
        return object.sort((a, b) => a.order - b.order);
    }
  }

  getListOfBasicObjects(){
    return ['Blogue Web','Calendrier','Collection','Discussion','Document','URL','Wiki'];
  }

  getListOfObjectsAndUrls(){
    
    let objectAndUrlArray=[
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
     if(this._webstorage.object){
     let object=JSON.parse(this._webstorage.object);
      console.log(object);
    
    this.newObj.name=object[0].value;
    this.newObj.url='/collection/add-customized-content';
     ;
    objectAndUrlArray.push(this.newObj);

     }
    
    return objectAndUrlArray;

  }

  getListOfCustomizedObjects(){
    if(this._webstorage.object){
     let object=JSON.parse(this._webstorage.object);
     console.log(object);
     // console.log(object[0].value);
     return [object];
    }
    
  }
  getUpdate(){
    if(this._webstorage.object){
     let object=JSON.parse(this._webstorage.object);
     console.log(object);
     this._updateData.next([object]);
    }
    
  }

  
}