import { Component } from '@angular/core';


@Component({
  templateUrl: './counter-pages.component.html',
  styles: `
    button{
      padding: 5px;
      font-weight: bold;
      margin: 5px 10px;
      width: 75px;
    }
  `
})
export class CounterPageComponent{
    counter = 10;

    increaseBy(value: number){

      this.counter += value;
    }
    resetCounter = () => this.counter = 10;
}
