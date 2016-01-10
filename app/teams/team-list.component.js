System.register(['angular2/core', './team.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, team_service_1, router_1;
    var TeamListComponent;
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
            }],
        execute: function() {
            TeamListComponent = (function () {
                function TeamListComponent(_service, _router, routeParams) {
                    this._service = _service;
                    this._router = _router;
                    this._selectedId = +routeParams.get('id');
                }
                TeamListComponent.prototype.isSelected = function (team) { return team.id === this._selectedId; };
                TeamListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getTeams().then(function (teams) { return _this.teams = teams; });
                };
                TeamListComponent.prototype.onSelect = function (team) {
                    this._router.navigate(['TeamDetail', { id: team.id }]);
                };
                TeamListComponent = __decorate([
                    core_1.Component({
                        template: "\n    <ul>\n      <li *ngFor=\"#team of teams\"\n        [class.selected]=\"isSelected(team)\"\n        (click)=\"onSelect(team)\">\n        <span class=\"badge\">{{team.id}}</span> {{team.name}}\n      </li>\n    </ul>\n  ",
                    }), 
                    __metadata('design:paramtypes', [team_service_1.TeamService, router_1.Router, router_1.RouteParams])
                ], TeamListComponent);
                return TeamListComponent;
            })();
            exports_1("TeamListComponent", TeamListComponent);
        }
    }
});
//# sourceMappingURL=team-list.component.js.map