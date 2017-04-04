//To delete 
import{Injectable} from '@angular/core';
import {WebStorageService} from "../web-storage.service";


@Injectable()
export class MyBuildingFormsService{

	constructor(private _webstorage:WebStorageService){}
	 getInputText(arg:string){

    	return `<div class="form-group">
    <label for="${arg}" class="col-sm-2 control-label">${arg}</label>
    <div class="col-sm-10">
      <input type="text" formControlName="${arg}" class="form-control" id="${arg}" >
    </div>
  </div>`;
    }

    extractData(){

    	let obj=JSON.parse(this._webstorage.object);
        console.log(obj);
    	let myFormContent=[];
    	let myFormGoupContent={};
        myFormGoupContent['file']='';
        console.log(myFormGoupContent);
    	for(let prop in obj)
  		{
    	 	if(prop=='name'){
    	 			//console.log(prop+" "+myForm.value[prop]);
    	 			//console.log(this._mybfs.getInputText(myForm.value[prop]));
    	 // myFormContent.push(obj[prop]);
    	 			// console.log(mySetObject);
    	 	}else{
    	 		//console.log(myForm.value.properties.length);
    	 		for(let item in obj.properties)
    	 		{
    	 			//console.log(myForm.value.properties[item]);
    	 			//console.log(myForm.value.properties[item].name);
    	 			if(obj.properties[item].type=='string'){
    	 				myFormContent.push(this.getInputText(obj.properties[item].name));
    	 				
    	 				myFormGoupContent[obj.properties[item].name]='';
                          console.log(myFormGoupContent);
    	 			}
    	 //console.log("myFormContent"+ myFormContent);
    	 		  
         //console.log("myFormGoupContent"+ myFormGoupContent);
    	 	
    	 			// console.log(this.myObject);
                    
    	 		
    	 			// console.log(myForm.value.properties[item].type);
				    return [myFormContent,myFormGoupContent];
                }
			}		
    	 }
    }

    

}
