import {Component} from 'angular2/core';
import {CoreComponent} from "./core.component";

@Component({
    selector: 'my-app',
    template: `
<corefoo></corefoo>
`,
    directives:[CoreComponent]
})
export class AppComponent { }