import{Component,OnInit} from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { ObjectBuilderService  } from './object-builder.service';
import { DropdownQuestion,TextboxQuestion  } from '../collection/dynamic-form/question-type';
import {SessionStorageService} from 'ng2-webstorage';
import {WebStorageService} from "../web-storage.service";



@Component({
	templateUrl:'./create-object-component.html',
	styleUrls:['./admin.css']
})

export class CreateObjectComponent implements OnInit{
	
	private myForm:FormGroup;

	constructor(private _fb:FormBuilder,private _obs:ObjectBuilderService,private _webstorage:WebStorageService,private _storage:SessionStorageService){}
	
	ngOnInit(){
		this.myForm=this._fb.group({
			name:['',Validators.required],
			clone:['',Validators.required]
		})
	}
	onSubmit(){
		
		if(this.myForm.value.clone=="document"){
			console.log('clone de :document');
		}
		let basicObject=this._obs.getAllBasicObjects();
		
    	let customizedObjectInput=new TextboxQuestion({
        	key: 'objectname',
        	label: 'customized',
        	value: this.myForm.value.name,
        	required: true,
        	type:'hidden',
        	order: 5
      	});

		let customizedObject=Object.assign([],basicObject);
		customizedObject[0]=customizedObjectInput;
		console.log(customizedObject);
		 for(let object of customizedObject){
			console.log(object.label);
		 }
     //  console.log(customizedObject);
     // for(let object of customizedObject){
     //  console.log(object.label);
     // }
      this._storage.store('object',JSON.stringify(customizedObject));
                     console.log(this._webstorage.object);
                this._obs.getUpdate();
              
	}


}