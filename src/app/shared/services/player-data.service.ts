import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  playerName: string = "";
  playerScore: number = 0;
  constructor() { }

  addScore(number: number) {
    this.playerScore += number;
  }
}
