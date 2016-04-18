import {Component} from 'angular2/core';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {AddProjectComponent} from "./add-project.component";


@Component({
    selector: 'projects-list',
    templateUrl: 'templates/projects-list.tpl.html',
    directives: [AgGridNg2, AddProjectComponent]
})
export class ProjectsListComponent {
    columnDefs = [
        { headerName: "ID", field: "id" },
        { headerName: "Name", field: "name" }];

    rowData = [{id:1, name:"robin"}, {id:2, name:"greg"}];


}

