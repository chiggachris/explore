import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: [ './lineup.component.css' ]
})
export class LineupComponent implements OnInit {
  players: Player[] = [];
  strikers: Player[] = [];
  midfielders: Player[] = [];
  defenders: Player[] = [];
  GKs: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getStrikers();
    this.getMidfielders();
    this.getDefenders();
    this.getGKs();
  }

  getStrikers(): void {
    this.playerService.getPlayers()
      .subscribe(players => this.strikers = players.slice(9, 11));
  }
  
  getMidfielders(): void {
    this.playerService.getPlayers()
      .subscribe(players => this.midfielders = players.slice(5, 9));
  }
  
  getDefenders(): void {
    this.playerService.getPlayers()
      .subscribe(players => this.defenders = players.slice(1, 5));
  }
  
  getGKs(): void {
    this.playerService.getPlayers()
      .subscribe(players => this.GKs = players.slice(0, 1));
  }

}