import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  @Input() image: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  getImage(): string {
    let imageName: string;
    if (this.image) {
      imageName = this.image
    } else {
      imageName = "empty";
    }
    return `/assets/images/${imageName}.png`;
  }

  onClick() {

  }
}
