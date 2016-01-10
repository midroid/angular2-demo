System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Employee, EmployeeService, EMPLOYEES, employeesPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Employee = (function () {
                function Employee(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Employee;
            })();
            exports_1("Employee", Employee);
            EmployeeService = (function () {
                function EmployeeService() {
                }
                EmployeeService.prototype.getEmployees = function () { return employeesPromise; };
                EmployeeService.prototype.getEmployee = function (id) {
                    return employeesPromise
                        .then(function (employees) { return employees.filter(function (h) { return h.id === +id; })[0]; });
                };
                EmployeeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EmployeeService);
                return EmployeeService;
            })();
            exports_1("EmployeeService", EmployeeService);
            EMPLOYEES = [
                new Employee(11, 'Nikhil'),
                new Employee(12, 'Sirohi'),
                new Employee(13, 'Akash'),
                new Employee(14, 'Chauhan'),
                new Employee(15, 'Aditi'),
                new Employee(16, 'Lal')
            ];
            employeesPromise = Promise.resolve(EMPLOYEES);
        }
    }
});
//# sourceMappingURL=employee.service.js.map