import {Component, EventEmitter, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
import {PlayerDataService} from "../../../shared/services/player-data.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  name: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private router: Router,
              private playerDataService: PlayerDataService) { }

  ngOnInit(): void {
  }

  play() {
    if (this.name.valid) {
      this.playerDataService.playerName = this.name.value;
      this.router.navigate(['/game']);
    }
  }

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('minlength') ? 'Enter at least 3 characters' : '';
  }
}
