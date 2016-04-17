import {Component} from 'angular2/core';
import {AgGridNg2} from 'ag-grid-ng2/main';


@Component({
    selector: 'projects-list',
    templateUrl: 'templates/projects-list.tpl.html',
    directives: [AgGridNg2]
})
export class ProjectsListComponent {
    columnDefs = [
        { headerName: "ID", field: "id" },
        { headerName: "Name", field: "name" }];

    rowData = [{id:1, name:"robin"}, {id:2, name:"greg"}];


}

