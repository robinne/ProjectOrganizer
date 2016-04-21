import {Component} from 'angular2/core';
import {CoreComponent} from "./core.component";

@Component({
    selector: 'my-app',
    template: `
<h1>Design Layout</h1>
<core></core>
`,
    directives:[CoreComponent]
})
export class AppComponent { }