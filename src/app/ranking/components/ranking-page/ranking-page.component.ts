import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Player} from "../../../../classes/Player";
import {PlayerDataService} from "../../../shared/services/player-data.service";

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.css']
})
export class RankingPageComponent implements OnInit {
  mockListSize: number = 10;
  playersList: Player[] = [];
  constructor(private router: Router,
              private playerDataService: PlayerDataService) { }

  ngOnInit(): void {
    if (this.playerDataService.playerName === "") {
      this.router.navigate(['/login']);
    }
    this.mockPlayers();
    this.sortPlayers();
  }

  playAgain() {
    this.router.navigate(['/game']);
  }

  mockPlayers() {
    this.playersList.push(new Player(this.playerDataService.playerName + " (you)", this.playerDataService.playerScore));
    for (let i = 0; i < this.mockListSize; i++) {
      this.playersList.push(new Player(`Player ${i}`, Math.floor((Math.random() * 10) - 5)));
    }
  }

  sortPlayers() {
    this.playersList.sort((a, b) => {
      return b.score - a.score;
    });
  }
}
