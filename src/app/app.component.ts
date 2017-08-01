import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  night: boolean = false;
  die1: number = 1;
  die2: number = 6;

  ngOnInit(): void {
    this.onRandom();
  }

  async onRandom(): Promise<void> {
    this.die1 = Math.floor(Math.random() * 6 + 1);
    this.die2 = Math.floor(Math.random() * 6 + 1);
    for (let i = 0; i < 5; i++) {
      await (new Promise(resolve => setTimeout(resolve, 50)));
      this.die1 = Math.floor(Math.random() * 6 + 1);
      this.die2 = Math.floor(Math.random() * 6 + 1);
    }
  }

  onToggleNight(event): void {
    event.stopPropagation();
    this.night = !this.night;
  }
}
