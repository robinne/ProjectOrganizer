import {Component} from 'angular2/core';
import {ProjectsListComponent} from "./projects-list.component";

@Component({
    selector: 'my-app',
    template: `
<h1>My First Angular 2 App</h1>
<projects-list></projects-list>
`,
    directives:[ProjectsListComponent]
})
export class AppComponent { }