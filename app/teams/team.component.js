System.register(['angular2/core', 'angular2/router', './team-list.component', './team-detail.component', './team.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, team_list_component_1, team_detail_component_1, team_service_1;
    var TeamsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (team_list_component_1_1) {
                team_list_component_1 = team_list_component_1_1;
            },
            function (team_detail_component_1_1) {
                team_detail_component_1 = team_detail_component_1_1;
            },
            function (team_service_1_1) {
                team_service_1 = team_service_1_1;
            }],
        execute: function() {
            TeamsComponent = (function () {
                function TeamsComponent() {
                }
                TeamsComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h2>TEAMS</h2>\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.RouterOutlet],
                        providers: [team_service_1.TeamService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Teams', component: team_list_component_1.TeamListComponent, useAsDefault: true },
                        { path: '/:id', name: 'TeamDetail', component: team_detail_component_1.TeamDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], TeamsComponent);
                return TeamsComponent;
            })();
            exports_1("TeamsComponent", TeamsComponent);
        }
    }
});
//# sourceMappingURL=team.component.js.map