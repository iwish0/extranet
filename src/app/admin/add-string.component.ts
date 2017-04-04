import{Component,OnInit} from '@angular/core';
import{Form,FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
	templateUrl:'./add-string.html',
	styleUrls:['./admin.css']
})

export class AddStringComponent{
	
	private myForm:FormGroup;

	constructor(private _fb:FormBuilder){}
	
	ngOninit(){
		this.myForm=this._fb.group({
			name:['',Validators.required],
			label:[''],
			required:[''],
			value:[''],
			length:[''],

		});
	}
}