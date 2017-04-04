import{Component,OnInit,ViewChild} from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import{CollectionService} from './collection.service';
import {WebStorageService} from "../web-storage.service";
import {SessionStorageService} from 'ng2-webstorage';
import{MyBuildingFormsService} from '../admin/my-building-forms.service';
import { ObjectBuilderService } from '../admin/object-builder.service';
import { TextboxQuestion  } from './dynamic-form/question-type';

@Component({
	templateUrl:'./add-customized-content-form.html',
	styleUrls:['./forms.css']
})

export class AddCustomizedContentFormComponent{

  private questions: any[]; //new

  // private inputs;
  // private myForm:FormGroup;
  // private FormControl:FormControl;
   private collection:String;
	 private formObject:String;
 // @ViewChild("fileInput") fileInput;

  constructor(private _obs: ObjectBuilderService,private _mbfs:MyBuildingFormsService,private _storage:SessionStorageService,private _webstorage:WebStorageService,private activatedRoute:ActivatedRoute,private _fb:FormBuilder,private _collectionService:CollectionService){

   }

	ngOnInit(){
		
		this.activatedRoute.queryParams.subscribe((params: Params) => {
    		this.collection = params['collection'],
        this.formObject=params['object'];
    		console.log(this.collection);
        console.log(this.formObject);
		});

        // this.questions = this._service.getQuestions()
        // let q=this._obs.getAllBasicObjects();
         let q=this._obs.getObject(this.formObject);
    //      console.log(questions);
    // console.log(questions.length);
     q[q.length]= new TextboxQuestion({
        key: 'collection',
        type: 'hidden',
        value:this.collection
      });
     console.log(q);
     this.questions=q;    

    }
		// let resultArray=this._mbfs.extractData();
		// this.inputs=resultArray[0];
		// 	console.log("input "+this.inputs);
		// 	this.inputs=Array.from(this.inputs);	
  //     console.log("inputs"+ this.inputs.length);
		// 	console.log("Array "+this.inputs);	
		// let formControls=resultArray[1];
  //   console.log("formCOntrols "+formControls);

		// this.myForm=this._fb.group(formControls);
  // 	}

  //  onSubmit(){
  //    let fi = this.fileInput.nativeElement;
  //    let file
  //    if (fi.files && fi.files[0]) {
  //      file   = fi.files[0];

  //    }
 
  //    this._storage.store('fileUpload',file)
  //    this._storage.store('fileName',file.name);
  //    this._storage.store('fileSize',file.size);
  //    this._storage.store('fileDate',file.lastModifiedDate);
  //    this._storage.store('fileType',file.type);

  //    let collection=this.myForm.value.collection;
  // //   // let file =this.myForm.value.file;
  //    let title=this.myForm.value.title;
  //    let summary =this.myForm.value.summary;
  //    let description=this.myForm.value.description;
  //    let keywords =this.myForm.value.keywords;
  //    let author=this.myForm.value.author;
  //    let versionsMax=this.myForm.value.versionsMax;
  //    let expirationDate =this.myForm.value.expirationDate;
  //    let accessRights=this.myForm.value.accessRights;
  //    let circulation=this.myForm.value.circulation;

  //     this._collectionService.addDocument(collection,file,title,summary,description,keywords,expirationDate,versionsMax,author,accessRights,circulation)
  //       .subscribe(res=>console.log(res));

  //  }

}



	
  
  

