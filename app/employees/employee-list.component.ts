
// TODO SOMEDAY: Feature Componetized like CrisisCenter
import {Component, OnInit}   from 'angular2/core';
import {Employee, EmployeeService}   from './employee.service';
import {Router, RouteParams} from 'angular2/router';

@Component({
  template: `
    <h2>EMPLOYEES</h2>
    <ul>
      <li *ngFor="#employee of employees"
        [class.selected]="isSelected(employee)"
        (click)="onSelect(employee)">
        <span class="badge">{{employee.id}}</span> {{employee.name}}
      </li>
    </ul>
  `
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  private _selectedId: number;

  constructor(
    private _service: EmployeeService,
    private _router: Router,
    routeParams: RouteParams) {
      this._selectedId = +routeParams.get('id');
  }

  isSelected(employee: Employee) { return employee.id === this._selectedId; }

  onSelect(employee: Employee) {
    this._router.navigate( ['EmployeeDetail', { id: employee.id }] );
  }

  ngOnInit() {
    this._service.getEmployees().then(employees => this.employees = employees)
  }
}
