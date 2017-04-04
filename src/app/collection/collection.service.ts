import{Injectable} from '@angular/core';
import{Http,Response,Headers,RequestOptions,ResponseContentType} from '@angular/http';
import{FormGroup} from '@angular/forms';
import{Collection} from './collection';
import{SoapEnvelopeService} from './soap-envelope-service';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Parser} from 'xml2js';
import * as xml2js from 'xml2js';

@Injectable()
export class CollectionService{
	
	private res:Response;
  public viewer:string='viewer';

	private url:string='http://www.dneonline.com/calculator.asmx';
	private getCollection:string='http://swapi.co/api/people/';
	private urlSave:string='http://localhost:4200/src/app/test.mp4';
	  private url6:string='http://localhost:4200/src/app/skype_icon.png';
	
	constructor(private http:Http,private _soap:SoapEnvelopeService){}

	 addDocument(collection,file,title,summary,description,keywords,expirationDate,versionsMax,author,accessRights,circulation){
	 	let se=this._soap.addDocument(collection,file,title,summary,description,keywords,expirationDate,versionsMax,author,accessRights,circulation);
	 	return this.http.post('http://localhost:4200/src/app',se);
	 }

	// addDocument(myForm:FormGroup,arg){
 // 		let formData=new FormData();
 // 		formData.append("data",JSON.stringify(myForm.value));
 // 		formData.append("file",arg);
 // 	  console.log(arg);
 // 		console.log(myForm.value);
 // 		return this.http.post("http://localhost:4200/src/app",formData);
 // 		var builder = new xml2js.Builder();
// // var xml = builder.buildObject(form);
// // console.log(xml);

//	}

	getData (): Observable<Collection[]> {
  		return this.http.get(this.getCollection,{headers: this.getHeaders()})
                  .map(this.extractData)
                  .catch(this.handleError);
	}

	private getHeaders(){
    	let headers = new Headers();
    	headers.append('Accept', 'application/json');
    	return headers;
  	}

  	// downloadPDF(): any {
   //      return this.http.get(this.urlSave, { responseType: ResponseContentType.Blob })
   //      .map(res => {
   //          var blob= new Blob([res.blob()],{ type: 'video/mp4'})
   //          console.log(blob);
   //          return blob;
   //      })
  	// }
 
 	getAddOperation(arg,arg2):Observable<number>{
 		let soap=this._soap.add(arg,arg2);
 		// console.log(sr);
        let headers = new Headers({ 'Content-Type': 'application/soap+xml; charset=utf-8'});
    	let options = new RequestOptions({ headers: headers });
		return this.http.post('http://localhost:4200/src/app/',soap,options)
        	.map(this.extractData2)
        	.catch(this.handleError);            
  } 

	private extractData2(res: Response) {
    	var parser = new Parser({explicitRoot:false,explicitArray : false, ignoreAttrs : true});
     	let body=res.text();
		body=body.replace(/soap:Body/g,"soap");
    	parser.parseString(body,function(err,result){
     		body=result.soap.AddResponse.AddResult;
     	})
		return body;
 	}

	private extractData(res: Response) {
    	let body = res.json().results;
    	console.log(body);
    	console.log(body.data);
    	return body;
  	}

  	private handleError (error: Response | any) {
    	let errMsg: string;
	    if (error instanceof Response) {
	      const body = error.json() || '';
	      const err = body.error || JSON.stringify(body);
	      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	    } else {
	      errMsg = error.message ? error.message : error.toString();
	    }
	    console.error(errMsg);
	    return Observable.throw(errMsg);
  	}


  	upload(fileToUpload: any) {
    let input = new FormData();
    input.append("file", fileToUpload);
    console.log(input);
     return this.http
         .post("http://localhost:4200/src/app", input);
	}
}