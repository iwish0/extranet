import{Component,OnInit,} from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import{ObjectBuilderService} from './object-builder.service';
import { Router }  from '@angular/router';


import{MyObject} from './myobject';

@Component({
	templateUrl:'./admin.html',
	styleUrls:['./admin.css']

})

export class AdminComponent implements OnInit{

	
	private form:FormGroup;
	private myobject:MyObject;
	private selectedObject;
	private basicObjects;
	private customizedObjects;
	private displayObject:boolean=true;
	private displayObject2:boolean=true;




	constructor(private _router:Router,private _obs:ObjectBuilderService,private _fb:FormBuilder,){}
	ngOnInit(){

		this.basicObjects=this._obs.getListOfBasicObjects();
		this.customizedObjects=this._obs.getListOfCustomizedObjects();
		this._obs.updateData$.subscribe(
        data => this.customizedObjects=data);

	}

	onDisplayObject(number:number){
		if(number==1){
			this.displayObject=!this.displayObject;
		}
		else if(number==2){
			this.displayObject2=!this.displayObject2;
		}	
	}
	onSelect(object){
		this.selectedObject=object;
		 this._router.navigate(['/admin']);
	}

	hide(){
		this.selectedObject='';
		 this._router.navigate(['/admin/create-object']);
		console.log("hide"+this.selectedObject);
	}
}