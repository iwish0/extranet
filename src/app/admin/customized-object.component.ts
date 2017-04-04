//to delete
import{Component,OnInit} from '@angular/core';
import{FormGroup,FormControl,FormArray,FormBuilder,Validators} from '@angular/forms';
import { CustomizedObject } from './customized-object.interface';
import{MyBuildingFormsService} from './my-building-forms.service';
import {WebStorageService} from "../web-storage.service";
import {SessionStorageService} from 'ng2-webstorage';
import{ObjectService} from '../system-object.service';


import{MyObject} from './myobject';

@Component({
	templateUrl:'./customized-object.html',
	styleUrls:['./admin.css']
})

export class CustomizedObjectComponent implements OnInit{
	 public myForm: FormGroup;
	 public myForm2:FormGroup;
	 myObject=new MyObject;

    constructor(private _systemObj:ObjectService,private _webstorage:WebStorageService,private _storage:SessionStorageService, private _fb: FormBuilder,private _mybfs: MyBuildingFormsService) { }
	ngOnInit(){
		  this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            properties: this._fb.array([
                this.initProperty(),
            ])
        });
	}
	 initProperty() {
        return this._fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            type: ['',Validators.required]
        });
    }

    addProperty() {
        const control = <FormArray>this.myForm.controls['properties'];
        control.push(this.initProperty());
    }

    removeProperty(i: number) {
        const control = <FormArray>this.myForm.controls['properties'];
        control.removeAt(i);
    }
      
    save(/*model: CustomizedObject,*/myForm) {
      
               this._storage.store('object',JSON.stringify(myForm.value));
                     console.log(this._webstorage.object);
                this._systemObj.getUpdate();
                 this._mybfs.extractData();

    	 // this.myForm2 = this._fb.group(this.myObject);
    
}
}