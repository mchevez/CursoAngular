// import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


interface Character{
  id: number,
  name: string,
  power: number
}

@Component({
  templateUrl: './dragonball-page.component.html',
  // imports: [NgClass],
})
export class DragonballPageComponent {

  name = signal('Gohan');
  power = signal(100);
  Number = Number;

  characters = signal<Character[]>([
    {id: 1, name:'Goku', power: 9001 },
    {id: 2, name:'Vegeta', power: 8000 },
    {id: 4, name:'Yamcha', power: 500 },
    {id: 3, name:'Piccolo', power: 3000 },
  ])

  addCharacter = () => {

    let data = this.characters();

    const character : Character = {
      id: 0,
      name: this.name(),
      power: this.power(),
    }

    data.push(character);
    this.name.set('');
    this.power.set(0);
  }

  // powerClasses = computed(() => {

  //   return {
  //     'text-danger': true
  //   }
  // })
}
