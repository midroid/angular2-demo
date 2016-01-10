
import {Component, OnInit} from 'angular2/core';
import {Team, TeamService} from './team.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';
import {DialogService} from '../dialog.service';

@Component({
  template: `
  <div *ngIf="team">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{team.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <button (click)="save()">Save</button>
    <button (click)="cancel()">Cancel</button>
  </div>
  `,
  styles: ['input {width: 20em}']
})

export class TeamDetailComponent implements OnInit, CanDeactivate {

  team: Team;
  editName: string;

  constructor(
    private _service: TeamService,
    private _router: Router,
    private _routeParams: RouteParams,
    private _dialog: DialogService
    ) { }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._service.getTeam(id).then(team => {
      if (team) {
        this.editName = team.name;
        this.team = team;
      } else { // id not found
        this.gotoTeams();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) : any {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
    if (!this.team || this.team.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this._dialog.confirm('Discard changes?');
  }

  cancel() {
    this.editName = this.team.name;
    this.gotoTeams();
  }

  save() {
    this.team.name = this.editName;
    this.gotoTeams();
  }

  gotoTeams() {
    let teamId = this.team ? this.team.id : null;
    // Pass along the hero id if available
    // so that the TeamListComponent can select that hero.
    // Add a totally useless `foo` parameter for kicks.
    this._router.navigate(['TeamList',  {id: teamId, foo: 'foo'} ]);
  }
}
