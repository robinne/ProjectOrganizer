import {Component} from 'angular2/core';
import {AgGridNg2} from 'ag-grid-ng2/main';

@Component({
    selector: 'projects-list',
    templateUrl: 'templates/projects-list.tpl.html',
    directives: [AgGridNg2]
})
export class ProjectsListComponent {
    public my_data = [{"id": 1, "name": "Robin"}, {"id": 2, "name": "Greg"}];

    public columnDefs = [{headerName: 'id'}, {headerName: 'name'}];
}
