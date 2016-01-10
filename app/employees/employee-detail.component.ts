import {Component,  OnInit}  from 'angular2/core';
import {Employee, EmployeeService}   from './employee.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
  template: `
  <h2>EMPLOYEES</h2>
  <div *ngIf="employee">
    <h3>"{{employee.name}}"</h3>
    <div>
      <label>Id: </label>{{employee.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="employee.name" placeholder="name"/>
    </div>
    <button (click)="gotoEmployees()">Back</button>
  </div>
  `,
})
export class EmployeeDetailComponent implements OnInit  {
  employee: Employee;

  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:EmployeeService){}

  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.getEmployee(id).then(employee => this.employee = employee);
  }

  gotoEmployees() {
    let employeeId = this.employee ? this.employee.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Add a totally useless `foo` parameter for kicks.
    this._router.navigate(['Employees',  {id: employeeId, foo: 'foo'} ]);
  }
}
