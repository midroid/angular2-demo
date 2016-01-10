System.register(['angular2/core', './team.service', 'angular2/router', '../dialog.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, team_service_1, router_1, dialog_service_1;
    var TeamDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (team_service_1_1) {
                team_service_1 = team_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            }],
        execute: function() {
            TeamDetailComponent = (function () {
                function TeamDetailComponent(_service, _router, _routeParams, _dialog) {
                    this._service = _service;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._dialog = _dialog;
                }
                TeamDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._service.getTeam(id).then(function (team) {
                        if (team) {
                            _this.editName = team.name;
                            _this.team = team;
                        }
                        else {
                            _this.gotoTeams();
                        }
                    });
                };
                TeamDetailComponent.prototype.routerCanDeactivate = function (next, prev) {
                    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
                    if (!this.team || this.team.name === this.editName) {
                        return true;
                    }
                    // Otherwise ask the user with the dialog service and return its
                    // promise which resolves to true or false when the user decides
                    return this._dialog.confirm('Discard changes?');
                };
                TeamDetailComponent.prototype.cancel = function () {
                    this.editName = this.team.name;
                    this.gotoTeams();
                };
                TeamDetailComponent.prototype.save = function () {
                    this.team.name = this.editName;
                    this.gotoTeams();
                };
                TeamDetailComponent.prototype.gotoTeams = function () {
                    var teamId = this.team ? this.team.id : null;
                    // Pass along the hero id if available
                    // so that the TeamListComponent can select that hero.
                    // Add a totally useless `foo` parameter for kicks.
                    this._router.navigate(['TeamList', { id: teamId, foo: 'foo' }]);
                };
                TeamDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n  <div *ngIf=\"team\">\n    <h3>\"{{editName}}\"</h3>\n    <div>\n      <label>Id: </label>{{team.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"editName\" placeholder=\"name\"/>\n    </div>\n    <button (click)=\"save()\">Save</button>\n    <button (click)=\"cancel()\">Cancel</button>\n  </div>\n  ",
                        styles: ['input {width: 20em}']
                    }), 
                    __metadata('design:paramtypes', [team_service_1.TeamService, router_1.Router, router_1.RouteParams, dialog_service_1.DialogService])
                ], TeamDetailComponent);
                return TeamDetailComponent;
            })();
            exports_1("TeamDetailComponent", TeamDetailComponent);
        }
    }
});
//# sourceMappingURL=team-detail.component.js.map