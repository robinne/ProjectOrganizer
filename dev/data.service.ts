import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import 'rxjs/Rx';

@Injectable()
export class DataService {

    constructor(private _http:Http) {
    }

    postData(data:any) {
        // need URL, the data
        const body = JSON.stringify(data); //. javascript object ("data") to json, string
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //observable
        // the return will be key info. he calls the http.post an observable.
        return this._http.post('https://XYZ.firebaseio.com/data.json',
            body, {headers: headers})
            .map(response=>response.json()); // map response. data stream to json

    }
}