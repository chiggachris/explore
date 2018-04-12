import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { LineupComponent }   from './lineup/lineup.component';
import { PlayerDetailComponent }  from './player-detail/player-detail.component';
import { PlayersComponent }      from './players/players.component';
import { PlayerService }          from './player.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LineupComponent,
    PlayersComponent,
    PlayerDetailComponent,
    MessagesComponent
  ],
  providers: [ PlayerService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }