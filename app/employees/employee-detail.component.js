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
    var EmployeeDetailComponent;
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
            EmployeeDetailComponent = (function () {
                function EmployeeDetailComponent(_router, _routeParams, _service) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                }
                EmployeeDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._service.getEmployee(id).then(function (employee) { return _this.employee = employee; });
                };
                EmployeeDetailComponent.prototype.gotoEmployees = function () {
                    var employeeId = this.employee ? this.employee.id : null;
                    // Pass along the hero id if available
                    // so that the HeroList component can select that hero.
                    // Add a totally useless `foo` parameter for kicks.
                    this._router.navigate(['Employees', { id: employeeId, foo: 'foo' }]);
                };
                EmployeeDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n  <h2>EMPLOYEES</h2>\n  <div *ngIf=\"employee\">\n    <h3>\"{{employee.name}}\"</h3>\n    <div>\n      <label>Id: </label>{{employee.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"employee.name\" placeholder=\"name\"/>\n    </div>\n    <button (click)=\"gotoEmployees()\">Back</button>\n  </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, employee_service_1.EmployeeService])
                ], EmployeeDetailComponent);
                return EmployeeDetailComponent;
            })();
            exports_1("EmployeeDetailComponent", EmployeeDetailComponent);
        }
    }
});
//# sourceMappingURL=employee-detail.component.js.map