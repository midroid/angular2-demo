
import {Component, OnInit} from 'angular2/core';
import {Team, TeamService} from './team.service';
import {Router, RouteParams} from 'angular2/router';

@Component({
  template: `
    <ul>
      <li *ngFor="#team of teams"
        [class.selected]="isSelected(team)"
        (click)="onSelect(team)">
        <span class="badge">{{team.id}}</span> {{team.name}}
      </li>
    </ul>
  `,
})
export class TeamListComponent implements OnInit {
  teams: Team[];

  private _selectedId: number;

  constructor(
    private _service: TeamService,
    private _router: Router,
    routeParams: RouteParams) {
      this._selectedId = +routeParams.get('id');
  }

  isSelected(team: Team) { return team.id === this._selectedId; }

  ngOnInit() {
    this._service.getTeams().then(teams => this.teams = teams);
  }

  onSelect(team: Team) {
    this._router.navigate( ['TeamDetail', { id: team.id }]  );
  }
}
