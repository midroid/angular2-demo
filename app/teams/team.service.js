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
    var Team, TeamService, teams, teamsPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Team = (function () {
                function Team(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Team;
            })();
            exports_1("Team", Team);
            TeamService = (function () {
                function TeamService() {
                }
                TeamService.prototype.getTeams = function () { return teamsPromise; };
                TeamService.prototype.getTeam = function (id) {
                    return teamsPromise
                        .then(function (teams) { return teams.filter(function (c) { return c.id === +id; })[0]; });
                };
                TeamService.prototype.addTeam = function (name) {
                    name = name.trim();
                    if (name) {
                        var team = new Team(TeamService.nextTeamId++, name);
                        teamsPromise.then(function (teams) { return teams.push(team); });
                    }
                };
                TeamService.nextTeamId = 100;
                TeamService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TeamService);
                return TeamService;
            })();
            exports_1("TeamService", TeamService);
            teams = [
                new Team(1, 'Order made'),
                new Team(2, 'Zensha'),
                new Team(3, 'APIs'),
                new Team(4, 'SSO')
            ];
            teamsPromise = Promise.resolve(teams);
        }
    }
});
//# sourceMappingURL=team.service.js.map