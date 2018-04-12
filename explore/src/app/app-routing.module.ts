import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LineupComponent }   from './lineup/lineup.component';
import { PlayersComponent }      from './players/players.component';
import { PlayerDetailComponent }  from './player-detail/player-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'lineup', component: LineupComponent },
  { path: 'detail/:number', component: PlayerDetailComponent },
  { path: 'players', component: PlayersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}