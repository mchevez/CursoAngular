import { Component, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  addCharacter = () => {

    if(!this.name() || !this.power() || this.power()<=0){
      alert('No se pueden dejar los campos vacios')
      return;
    }

    const newCharacter : Character = {
      id: 0,
      name: this.name(),
      power: this.power(),
    }

    // this.characters.update(list =>[...list, newCharacter ])

    console.log({newCharacter});
    this.resetFields()
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
