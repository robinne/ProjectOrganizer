import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import 'rxjs/Rx';

@Injectable()
export class DataService {

    constructor(private _http:Http) {
    }
    // this works. posted to firebase
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

    getFromExpress(): any{
        // console.log("get From Express routine called:...");
        // console.log(this._http.get("http://localhost:8000/some-data-api").map((res:Response) => res.json()));

        // what would a working response look like
        //return (this._http.get("https://vivid-heat-1741.firebaseio.com/data.json").map(response=>response.json()));

        // now try it with my rest api
        return (this._http.get("http://localhost:8000/some-data-api").map(response=>response.json()));
    }

    postToExpress()
    {
        return (this._http.get("http://localhost:8000/post-data").map(response=>response.json()));
    }
}