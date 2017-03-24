import{Injectable} from '@angular/core';

@Injectable()
export class SoapEnvelopeService{
	
	add(number,number2){
		let  sr=`<?xml version="1.0" encoding="utf-8"?>
	 	 <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
		  <soap12:Body>
		    <Add xmlns="http://tempuri.org/">
		      <intA>${number}</intA>
		      <intB>${number2}</intB>
		    </Add>
		  </soap12:Body>
		</soap12:Envelope>`;
		return sr;
	}

	addDocument(collection,file,title,summary,description,keywords,expirationDate,versionsMax,author,accessRights,circulation){
		let  sr=`<?xml version="1.0" encoding="utf-8"?>
	 	<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
			<soap12:Body>
		    <Add xmlns="http://tempuri.org/">
		    	<collection>${collection}</collection>
		    	<file>${file}</file>
		    	<title>${title}</title>
		    	<summary>${summary}<summary />
		    	<description>${description}</description>
		    	<keywords>${keywords}<keywords />
		    	<expirationDate>${expirationDate}<expirationDate />
		    	<versionsMax>${versionsMax}</versionsMax>
			   	<author>${author}</author>
			   	<accessRights>${accessRights}</accessRights>
			   	<circulation>${circulation}</circulation>
		    </Add>
		  </soap12:Body>
		</soap12:Envelope>`;
		return sr;
	}
}