/**
 * Created by rluther on 4/18/2016.
 */
import {Component} from 'angular2/core';
import {DataService} from "./data.service";

@Component({
    selector: 'add-project',
    template: `
<form (ngSubmit)="onSubmit(f)" #f="ngForm">
<div class="input">
<label for="name">Name</label>
<input type="text" id="name" ngControl="name" required>
</div>
<div class="input">
<label for="summary">Summary</label>
<input type="text" id="summary" ngControl="summary" required>
</div>
<button type="submit">Submit</button>
<!--<button (click)="onPost(name.value, summary.value)">Post Data</button>-->
</form>
`,
    providers: [DataService]
})

export class AddProjectComponent {
    response:string;

    constructor(private _dataService:DataService){}

    onSubmit(form){
        console.log(form);
    }
    // onPost(name:string, summary: string) {
    //     // create javascript object with the data
    //     const data = {
    //         name: name,
    //         summary:summary
    //     };
    //     this._dataService.addProject(data)
    //         .subscribe(
    //             data => this.response = JSON.stringify(data),
    //             error=> console.log(error)
    //         ); //get stuff back from observable
    // }

}