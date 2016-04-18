/**
 * Created by rluther on 4/18/2016.
 */
import {Component} from 'angular2/core';

@Component({
    selector:'add-project',
    template:`
<div>
<div class="input">
<label for="name">Name</label>
<input type="text" id="name" #name>
</div>
<div class="input">
<label for="notes">Name</label>
<input type="text" id="notes" #notes>
</div>
<button (click)="onPost(name.value, notes.value)">Post Data</button>
<button (click)="onGetPosts()">Get All Posts</button>
</div>
`
})

export class AddProjectComponent{
    response: string;

    onPost()

    onGetPosts()
}