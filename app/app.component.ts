import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {TeamsComponent} from './teams/teams.component';
import {EmployeeListComponent}     from './employees/employee-list.component';
import {EmployeeDetailComponent}   from './employees/employee-detail.component';

import {DialogService}         from './dialog.service';
import {EmployeeService}           from './employees/employee.service';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Angular 2 - Demo App</h1>
    <nav>
      <a [routerLink]="['Teams']">Teams</a>
      <a [routerLink]="['Employees']">Employees</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers:  [DialogService, EmployeeService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

  { // Team child route
    path: '/teams/...',
    name: 'Teams',
    component: TeamsComponent,
    useAsDefault: true
  },

  {path: '/employees',   name: 'Employees',     component: EmployeeListComponent},
  {path: '/employee/:id', name: 'EmployeeDetail', component: EmployeeDetailComponent},
  
])
export class AppComponent { }
