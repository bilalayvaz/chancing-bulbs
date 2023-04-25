import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'chancing-bulbs';
  counter: number = 0;
  passIsOver: boolean = false;
  bulbs: boolean[] = [];
  openedBulbs: number[] = [];

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.bulbs.push(false);
    }
  }

  changeBulbs() {
    this.counter++;

    for (let i = this.counter - 1; i < 100; i += this.counter) {
      this.bulbs[i] = !this.bulbs[i];
    }

    if (this.bulbs[this.counter - 1] === true) {
      this.openedBulbs.push(this.counter);
    }

    if (this.counter === 100) {
      this.passIsOver = true;
    }
  }
}
