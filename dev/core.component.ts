import {Component} from '@angular/core';
import {ProjectsListComponent} from "./projects-list.component";
import {QueueComponent} from "./queue.component";
import {TasksComponent} from "./tasks.component";


@Component({
    selector: 'corefoo',
    templateUrl: 'templates/core.tpl.html',
    directives: [ProjectsListComponent, QueueComponent, TasksComponent]
})
export class CoreComponent {
}

