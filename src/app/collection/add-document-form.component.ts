import{Component,OnInit,ViewChild} from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import{CollectionService} from './collection.service';
import {WebStorageService} from "../web-storage.service";
import {SessionStorageService} from 'ng2-webstorage';

@Component({
  templateUrl:'./add-document-form.html',
  styleUrls:['./forms.css']

})
export class AddDocumentFormComponent implements OnInit{
	
  
  private url;
  private url2;
  private urlVideo;
  private urlDocument;
	private formGroupDocument:FormGroup;
	private FormControl:FormControl;
	private collection:String;
	private myDatePickerOptions: IMyOptions = {
          dateFormat: 'dd-mm-yyyy'
  };

 

 	@ViewChild("fileInput") fileInput;

  onDateChanged(event: IMyDateModel) {
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }

 	constructor(private sanitizer: DomSanitizer,private _storage:SessionStorageService,private _webstorage:WebStorageService,private activatedRoute:ActivatedRoute,private _fb:FormBuilder,private _collectionService:CollectionService){
   
   }

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
      author:'',
      accessRights:'same',
      circulation:'false'    
  	})
  }

  // onChange(event) {
  //  //  let file = event.target.files;
  //  //      let formData = new FormData();
  //  //  formData.append('file', file, file.name )
  //  // // console.log(formData.json);
  //   let fi = this.fileInput.nativeElement;
  //   if (fi.files && fi.files[0]) {
  //       let fileToUpload = fi.files[0];
  //       this._collectionService
  //           .upload(fileToUpload)
  //           .subscribe(res => {
  //               console.log(res);
  //           });
  //   }
   
  // }
  
   onAddDocumentSubmit(){
     let fi = this.fileInput.nativeElement;
     let file
     if (fi.files && fi.files[0]) {
       file   = fi.files[0];

     }
      this.url='https://www.youtube.com/embed/zYMflJPC8ao';
  this.urlVideo =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      console.log(this.urlVideo);
      let objectURL = window.URL.createObjectURL(file);
       this.url2=objectURL;
       console.log(this.url2);
  this.urlDocument =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
      console.log(this.urlDocument);
  //   console.log(file);
  //   console.log(file.name);
  //   console.log(file.size);
  //   console.log(file.lastModifiedDate);
     this._storage.store('fileUpload',file)
     this._storage.store('fileName',file.name);
     this._storage.store('fileSize',file.size);
     this._storage.store('fileDate',file.lastModifiedDate);
     this._storage.store('fileType',file.type);

     let collection=this.formGroupDocument.value.collection;
  //   // let file =this.formGroupDocument.value.file;
     let title=this.formGroupDocument.value.title;
     let summary =this.formGroupDocument.value.summary;
     let description=this.formGroupDocument.value.description;
     let keywords =this.formGroupDocument.value.keywords;
     let author=this.formGroupDocument.value.author;
     let versionsMax=this.formGroupDocument.value.versionsMax;
     let expirationDate =this.formGroupDocument.value.expirationDate;
     let accessRights=this.formGroupDocument.value.accessRights;
     let circulation=this.formGroupDocument.value.circulation;

      this._collectionService.addDocument(collection,file,title,summary,description,keywords,expirationDate,versionsMax,author,accessRights,circulation)
        .subscribe(res=>console.log(res));

   }
 

 //  onAddDocumentSubmit(){
   
  //   // console.log(this.formGroupDocument);
  //   // console.log(this.formGroupDocument.value);
//      let fi = this.fileInput.nativeElement;
  //     let fileToUpload
    // if (fi.files && fi.files[0]) {
      // fileToUpload=fi.files[0];
//        var obj_url=window.URL.createObjectURL(fileToUpload);

// // this.urls=obj_url;
// // console.log(this.urls);
//  this.viewer =
//       this.sanitizer.bypassSecurityTrustResourceUrl(obj_url);
//       console.log(this.viewer);
// // window.URL.revokeObjectURL(obj_url);
//            //this._collectionService
//              //  .upload(fileToUpload)
//    //           .subscribe(res => {
//   //                 console.log(res);
            //  });
     // }
   // let circulation=this.formGroupDocument.get('circulation').value;
   // let collection =this.formGroupDocument.get('collection').value;
     // let file=this.formGroupDocument.get('file').value;
       //   console.log(this.formGroupDocument.get('versionsMax').value);
         // this._collectionService.addDocument(this.formGroupDocument,fileToUpload)
         // .subscribe(res=>console.log(res));
               
   //}
}