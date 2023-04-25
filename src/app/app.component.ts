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
  greenBulbs: number[] = [];
  bulbs: boolean[] = [];

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

    if (this.counter === 100) {
      this.passIsOver = true;
      this.openedBulbs();
    }
  }

  openedBulbs() {
    /*  this.greenBulbs = this.bulbs
      .map((bulb, index) => {
        return bulb ? index + 1 : 0;
      })
      .filter((bulb) => bulb !== 0); */

    this.greenBulbs = this.bulbs.flatMap((bulb, index) => {
      return bulb ? [index + 1] : [];
    });
  }
}
