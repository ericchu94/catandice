import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  night: boolean = false;
  die1: number = 1;
  die2: number = 6;

  ngOnInit(): void {
    this.onRandom();
  }

  onRandom(): void {
    this.die1 = Math.floor(Math.random() * 6 + 1);
    this.die2 = Math.floor(Math.random() * 6 + 1);
  }

  onToggleNight(event): void {
    event.stopPropagation();
    this.night = !this.night;
  }
}
