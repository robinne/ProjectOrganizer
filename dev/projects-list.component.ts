import {Component} from 'angular2/core';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {AddProjectComponent} from "./add-project.component";
import {DataService} from "./data.service";


@Component({
    selector: 'projects-list',
    templateUrl: 'templates/projects-list.tpl.html',
    directives: [AgGridNg2, AddProjectComponent],
    providers: [DataService]
})
export class ProjectsListComponent {
    constructor(private myDS:DataService) {
    }

    columnDefs = [
        {headerName: "ID", field: "id"},
        {headerName: "Name", field: "name"}];

    rowData = [{id: 1, name: "robin"}, {id: 2, name: "greg"}];


    GetProjects()
    {
        this.myDS.getAllProjects().subscribe(
            data =>{
                console.log(data);
            }
        )
    }

    IGetData() {
        this.myDS.getFromExpress().subscribe(
            data =>{
                console.log(data);
            }
        );
    }
    
    PostToExpress()
    {
        this.myDS.postToExpress().subscribe(
            data =>{
                console.log(data);
            }
        )
    }
}