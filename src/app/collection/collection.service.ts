import{Injectable} from '@angular/core';
import{Http,Response,Headers,RequestOptions} from '@angular/http';
import{FormGroup} from '@angular/forms';
import{Collection} from './collection';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Parser} from 'xml2js';
import * as xml2js from 'xml2js';


@Injectable()
export class CollectionService{
	
	private res:Response;
	private url:string='http://www.dneonline.com/calculator.asmx';
	private getCollection:string='http://swapi.co/api/people/';
	
	constructor(private http:Http){}

	addDocument(formco:FormGroup){
		console.log(formco);

	}

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

	getXmlBySoap():Observable<number>{
        let headers = new Headers({ 'Content-Type': 'application/soap+xml; charset=utf-8','Access-Control-Allow-Origin':'*' });
    	let options = new RequestOptions({ headers: headers });
		return this.http.post(this.url,this.sr,options)
        	.map(this.extractData2)
        	.catch(this.handleError);;              
  } 

  sr=`<?xml version="1.0" encoding="utf-8"?>
	<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
	  <soap12:Body>
	    <Add xmlns="http://tempuri.org/">
	      <intA>2</intA>
	      <intB>8</intB>
	    </Add>
	  </soap12:Body>
	</soap12:Envelope>`;

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
}