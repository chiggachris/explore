import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Player } from './player';
import { PLAYERS } from './mock-players';
import { MessageService } from './message.service';

@Injectable()
export class PlayerService {

  constructor(private messageService: MessageService) { }

  getPlayers(): Observable<Player[]> {
    // Todo: send the message _after_ fetching the players
    this.messageService.add('PlayerService: fetched players');
    return of(PLAYERS);
  }

  getPlayer(number: number): Observable<Player> {
    // Todo: send the message _after_ fetching the player
    this.messageService.add(`PlayerService: fetched player number=${number}`);
    return of(PLAYERS.find(player => player.number === number));
  }
}