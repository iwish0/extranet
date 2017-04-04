import{Component,OnInit,Input} from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';

@Component({
	selector:'object-details',
	templateUrl:'./update-object.html',
	styleUrls:['./admin.css']
})

export class UpdateObjectComponent implements OnInit{
	
	@Input()
	private object;
	private objectName;
	private addProperties:string[]=['BigDecimal','Boolean','Date','Email','Float','Integer','Long','Menu','String','Text','URL'];
	constructor(private activatedRoute:ActivatedRoute){}

	ngOnInit(){
		this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.objectName = params['name'];
        console.log(this.objectName);

    });

	}

}