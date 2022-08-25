import {Component, Input, OnInit} from '@angular/core';
import {PlayerDataService} from "../../../shared/services/player-data.service";
import {Router} from "@angular/router";
import {ResultService} from "../../../shared/services/result.service";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  @Input()
  playerName: string = "";
  signsList: string[] = ['rock', 'paper', 'scissors'];

  constructor(private router: Router,
              private playerDataService: PlayerDataService,
              private resultService: ResultService) { }

  ngOnInit(): void {
    if (this.playerDataService.playerName === "") {
      this.router.navigate(['/login']);
    }
    this.playerName = this.playerDataService.playerName;
    this.getComputerChoice();
  }

  chooseSign(sign: string): void {
    this.resultService.playerChoice = sign;
    this.router.navigate(['/game/result']);
  }

  getComputerChoice(): void {
    this.resultService.computerChoice = this.signsList[Math.floor(Math.random() * this.signsList.length)];
  }
}
