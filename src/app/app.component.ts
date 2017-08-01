import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  night: boolean = false;
  die1: number = 1;
  die2: number = 1;
  firstDieRed: boolean = true;
  history: number[] = [];
  hidden: boolean = false;

  ngOnInit(): void {
    this.onRandom();
    this.history = [];
  }

  async onRandom(): Promise<void> {
    this.history.push(this.die1 + this.die2);
    this.hidden = true;
    await (new Promise(resolve => setTimeout(resolve, 250)));
    this.die1 = Math.floor(Math.random() * 6 + 1);
    this.die2 = Math.floor(Math.random() * 6 + 1);
    this.hidden = false;
    this.firstDieRed = !this.firstDieRed;
  }

  onToggleNight(event): void {
    event.stopPropagation();
    this.night = !this.night;
  }
}
