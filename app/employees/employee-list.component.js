System.register(['angular2/core', './employee.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, employee_service_1, router_1;
    var EmployeeListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EmployeeListComponent = (function () {
                function EmployeeListComponent(_service, _router, routeParams) {
                    this._service = _service;
                    this._router = _router;
                    this._selectedId = +routeParams.get('id');
                }
                EmployeeListComponent.prototype.isSelected = function (employee) { return employee.id === this._selectedId; };
                EmployeeListComponent.prototype.onSelect = function (employee) {
                    this._router.navigate(['EmployeeDetail', { id: employee.id }]);
                };
                EmployeeListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getEmployees().then(function (employees) { return _this.employees = employees; });
                };
                EmployeeListComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h2>EMPLOYEES</h2>\n    <ul>\n      <li *ngFor=\"#employee of employees\"\n        [class.selected]=\"isSelected(employee)\"\n        (click)=\"onSelect(employee)\">\n        <span class=\"badge\">{{employee.id}}</span> {{employee.name}}\n      </li>\n    </ul>\n  "
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.Router, router_1.RouteParams])
                ], EmployeeListComponent);
                return EmployeeListComponent;
            })();
            exports_1("EmployeeListComponent", EmployeeListComponent);
        }
    }
});
//# sourceMappingURL=employee-list.component.js.map