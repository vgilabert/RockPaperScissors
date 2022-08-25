import { Component, OnInit } from '@angular/core';
import {ResultService} from "../../../shared/services/result.service";
import {Router} from "@angular/router";
import {PlayerDataService} from "../../../shared/services/player-data.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  playerSign: string = "";
  computerSign: string = "";
  message: string = "";
  hasWon: any;

  constructor(private resultService: ResultService,
              private playerDataService: PlayerDataService,
              private router: Router) { }

  ngOnInit(): void {
    if(this.resultService.playerChoice === "" || this.resultService.computerChoice === "") {
      this.router.navigate(['/game']);
    }
    this.playerSign = this.resultService.playerChoice;
    this.computerSign = this.resultService.computerChoice;
    this.getResult();
  }

  getResult(): void {
    if (this.playerSign === this.computerSign) {
      this.message = "It's a tie!";
    } else if (this.playerSign === "rock" && this.computerSign === "scissors" ||
      this.playerSign === "paper" && this.computerSign === "rock" ||
      this.playerSign === "scissors" && this.computerSign === "paper") {
      this.playerDataService.addScore(1);
      this.message = "You win!";
      this.hasWon = true;
    } else {
      this.playerDataService.addScore(-1);
      this.message = "You lose!";
    }
  }

  getPlayerSign(): string {
    return `/assets/images/${this.playerSign}.png`;
  }

  getComputerSign(): string {
    return `/assets/images/${this.computerSign}.png`;
  }

  playAgain(): void {
    this.resultService.playerChoice = "";
    this.resultService.computerChoice = "";
    this.router.navigate(['/game']);
  }

  goToScorePanel() {
    this.router.navigate(['/ranking']);
  }
}
