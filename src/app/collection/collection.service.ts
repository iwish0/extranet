import{Injectable} from '@angular/core';
import{Http,Response,Headers} from '@angular/http';
import{FormGroup} from '@angular/forms';
import{Collection} from './collection';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class CollectionService{
	
	private res:Response;

	public getCollection:string='http://swapi.co/api/people/';
	constructor(private http:Http){}

	addDocument(formco:FormGroup){
	
		console.log(formco);

	}

	// getHeroes (): Observable<Hero[]> {
 //  		return this.http.get(this.heroesUrl)
 //                  .map(this.extractData)
 //                  .catch(this.handleError);
	// }

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


	private extractData(res: Response) {
    	let body = res.json().results;
    	// response.json().results.map(toPerson)
    	console.log(body);
    	console.log(body.data);
    	// return body.data || { };
    	return body;

  	}
  	private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
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