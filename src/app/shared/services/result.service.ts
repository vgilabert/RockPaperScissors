import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  playerChoice: string = "";
  computerChoice: string = "";

  constructor() { }
}
