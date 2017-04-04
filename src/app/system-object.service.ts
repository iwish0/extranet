// to delete

import{ Injectable} from '@angular/core';
import {WebStorageService} from "./web-storage.service";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { MyObject } from './admin/myobject';


@Injectable()
export class ObjectService{
	
	
	newObj=new MyObject();

	constructor(private _webstorage:WebStorageService){}

	// Observable string[] sources
	private _updateData = new Subject<string[]>();
	// Observable string[] streams
	updateData$ = this._updateData.asObservable(); //

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
		
		this.newObj.name=object.name;
		this.newObj.url='/collection/add-customized-content';
		console.log("thislkjlkjljlj "+this.newObj);
		objectAndUrlArray.push(this.newObj);

		}
		
		return objectAndUrlArray;

	}

	getListOfCustomizedObjects(){
		if(this._webstorage.object){
		 let object=JSON.parse(this._webstorage.object);
		 console.log(object);
		 return [object.name];
		}
		
	}
	getUpdate(){
		if(this._webstorage.object){
		 let object=JSON.parse(this._webstorage.object);
		 console.log(object);
		 this._updateData.next([object.name]);
		}
		
	}

 
 
	
}