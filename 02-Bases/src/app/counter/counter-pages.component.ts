import { Component, signal } from '@angular/core';


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
    counterSignal = signal(10);

    increaseBy(value: number){
      this.counter += value;
      // this.counterSignal.set(this.counterSignal() + 1)
      this.counterSignal.update(current => current + value);
    }
    resetCounter = () => {
      this.counter = 10;
      this.counterSignal.set(10);
    };
}
