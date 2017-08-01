import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('night', [
      state('true', style({
        backgroundColor: 'black',
        color: 'white',
      })),
      state('false', style({
        backgroundColor: 'white',
        color: 'black',
      })),
      transition('* => *', animate('1s')),
    ]),
    trigger('roll', [
      state('true', style({
        opacity: 0,
      })),
      state('false', style({
        opacity: 1,
      })),
      transition('* => *', animate('0.5s')),
    ])
  ]
})

export class AppComponent {
  night: boolean = false;
  die1: number = 1;
  die2: number = 1;
  firstDieRed: boolean = true;
  history: number[] = [];
  hidden: boolean = false;
  rolling: boolean = false;

  ngOnInit(): void {
    this.random();
  }

  onRoll(): void {
    this.history.push(this.die1 + this.die2);
    this.rolling = true;
  }

  onRollDone(): void {
    if (this.rolling) {
      this.random();
      this.rolling = false;
    }
  }

  random(): void {
    this.die1 = Math.floor(Math.random() * 6 + 1);
    this.die2 = Math.floor(Math.random() * 6 + 1);
    this.firstDieRed = !this.firstDieRed;
  }

  onToggleNight(event): void {
    event.stopPropagation();
    this.night = !this.night;
  }
}
