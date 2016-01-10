
import {Injectable} from 'angular2/core';

export class Team {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class TeamService {
  getTeams() { return teamsPromise; }

  getTeam(id: number | string) {
    return teamsPromise
      .then(teams => teams.filter(c => c.id === +id)[0]);
  }


  static nextTeamId = 100;

  addTeam(name:string) {
    name = name.trim();
    if (name){
      let team = new Team(TeamService.nextTeamId++, name);
      teamsPromise.then(teams => teams.push(team));
    }
  }
}

var teams = [
  new Team(1, 'Order made'),
  new Team(2, 'Zensha'),
  new Team(3, 'APIs'),
  new Team(4, 'SSO')
];

var teamsPromise = Promise.resolve(teams);
