import {Injectable} from 'angular2/core';

export class Employee {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class EmployeeService {
  getEmployees() { return employeesPromise; }

  getEmployee(id: number | string) {
    return employeesPromise
      .then(employees => employees.filter(h => h.id === +id)[0]);
  }
}

var EMPLOYEES = [
	new Employee(11, 'Nikhil'),
	new Employee(12, 'Sirohi'),
	new Employee(13, 'Akash'),
	new Employee(14, 'Chauhan'),
	new Employee(15, 'Aditi'),
	new Employee(16, 'Lal')
];

var employeesPromise = Promise.resolve(EMPLOYEES);
