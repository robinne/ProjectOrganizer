import {Component} from '@angular/core';
import {CoreComponent} from "./core.component";


@Component({
    selector: 'my-app',
    template: `
<corefoo></corefoo>
`,
    directives:[CoreComponent]
})
export class AppComponent {

}