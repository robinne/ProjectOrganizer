import {Injectable} from "angular2/core";
import {Http} from "angular2/http";


@Injectable()
export class DataService{
    
    constructor(private _http: Http){}

    postData(data: any){

        // need URL, the data
        
    }
}