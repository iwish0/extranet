import{Component, OnInit} from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import{CollectionService} from './collection.service';

@Component({
  templateUrl:'./add-discussion-form.html',
	styleUrls:['./forms.css']
})

export class AddDiscussionFormComponent implements OnInit{

	myFormGroup:FormGroup;
	collection:string;
  selectExpiration:string[]=['Jamais',
              '1 heure',
              '1 jour',
              '2 jours',
              '3 jours',
              '4 jours',
              '5 jours',
              '1 semaine',
              '2 semaines',
              '1 mois',
              '2 mois'];

	constructor(private _fb:FormBuilder,private activatedRoute:ActivatedRoute){}

  ngOnInit(){
 		this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.collection = params['collection'];
        console.log(this.collection);
  });

  this.myFormGroup= this._fb.group({
      collection:this.collection,
   		title:['',Validators.required],
   		summary:'',
      description:'',
      expirationDate:'Jamais',
      accessRights:'same'
   })
  }

  onAddDiscussionSubmit(){
    // this._collectionService.addDocument(this.formGroupDocument.value);
    // console.log(this.formGroupDocument);
    // console.log(this.formGroupDocument.value);
    // console.log(this.formGroupDocument.value.collection);
  }
}