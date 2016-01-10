import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {TeamListComponent}   from './team-list.component';
import {TeamDetailComponent} from './team-detail.component';
import {TeamService}         from './team.service';

@Component({
  template:  `
    <h2>TEAMS</h2>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers:  [TeamService]
})
@RouteConfig([
  {path:'/',         name: 'TeamList', component: TeamListComponent, useAsDefault: true},
  {path:'/:id',      name: 'TeamDetail', component: TeamDetailComponent}
])
export class TeamsComponent { }
