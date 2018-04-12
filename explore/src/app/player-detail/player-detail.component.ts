import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Player }         from '../player';
import { PlayerService }  from '../player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: [ './player-detail.component.css' ]
})
export class PlayerDetailComponent implements OnInit {
  @Input() player: Player;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer(): void {
    const number = +this.route.snapshot.paramMap.get('number');
    this.playerService.getPlayer(number)
      .subscribe(player => this.player = player);
  }

  goBack(): void {
    this.location.back();
  }
}