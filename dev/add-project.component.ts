/**
 * Created by rluther on 4/18/2016.
 */
import {Component} from 'angular2/core';
import {DataService} from "./data.service";

@Component({
    selector: 'add-project',
    template: `
<div>
<div class="input">
<label for="name">Name</label>
<input type="text" id="name" #name>
</div>
<div class="input">
<label for="notes">Notes</label>
<input type="text" id="notes" #notes>
</div>
<button (click)="onPost(name.value, notes.value)">Post Data</button>
<button (click)="onGetPosts()">Get All Posts</button>
<p>Response: {{response}}</p>
</div>
`,
    providers: [DataService]
})

export class AddProjectComponent {
    response:string;

    constructor(private _dataService:DataService){}

    onPost(name:string, notes: string) {
        // create javascript object with the data
        const data = {
            name: name,
            notes:notes
        };
        this._dataService.postData(data)
            .subscribe(
                data => this.response = JSON.stringify(data),
                error=> console.log(error)
            ); //get stuff back from observable
    }

    onGetPosts() {
    }
}