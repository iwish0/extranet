import{Component,OnInit} from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import{CollectionService} from './collection.service';


@Component({
  templateUrl:'./add-document-form.html',
  styleUrls:['./forms.css']

})

export class AddDocumentFormComponent implements OnInit{
	
	private formGroupDocument:FormGroup;
	private FormControl:FormControl;
	

	private collection:String;
	 private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd-mm-yyyy'

       
    };
 	
    public file;


 	 onDateChanged(event: IMyDateModel) {
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }

 	constructor(private activatedRoute:ActivatedRoute,private _fb:FormBuilder,private _collectionService:CollectionService){}

 	ngOnInit(){
 		this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.collection = params['collection'];
        console.log(this.collection);
      });



 		this.formGroupDocument= this._fb.group({
      collection:this.collection,
      file:['',Validators.required],
   		title:['',Validators.required],
   		summary:'',
      description:'',
      keywords:'',
      expirationDate:'',
      versionsMax:['4',Validators.required],
      auteur:'',
      accessRights:'same',
      circulation:'false'
       
  	})
  }

  onAddDocumentSubmit(){
    this._collectionService.addDocument(this.formGroupDocument.value);
    console.log(this.formGroupDocument);
    console.log(this.formGroupDocument.value);
    console.log(this.formGroupDocument.value.collection);
  }

 }