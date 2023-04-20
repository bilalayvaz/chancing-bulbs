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
  bulbs: Array<{ id: number; isOpen: boolean }> = [];

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.bulbs.push({ id: i + 1, isOpen: false });
    }
  }

  changeBulbs() {
    this.counter++;

    for (let i = this.counter - 1; i < 100; i += this.counter) {
      this.bulbs[i].isOpen = !this.bulbs[i].isOpen;
    }

    if (this.counter === 100) {
      this.passIsOver = true;

      for (let i = 0; i < 100; i++) {
        if (this.bulbs[i].isOpen === true) {
          this.greenBulbs.push(this.bulbs[i].id);
        }
      }
    }
  }
}
