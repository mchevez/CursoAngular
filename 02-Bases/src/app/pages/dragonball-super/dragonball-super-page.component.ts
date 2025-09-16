import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import type { Character } from '../../interfaces/character.interfaces';



@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterAddComponent, CharacterListComponent],
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);
  Number = Number;

  characters = signal<Character[]>([
    {id: 1, name:'Goku', power: 9001 },
    {id: 2, name:'Vegeta', power: 8000 },
  ])

  addCharacter = (character: Character) => {
    this.characters.update(list =>[...list, character ]);
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
