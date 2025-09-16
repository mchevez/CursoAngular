import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import type { Character } from '../../interfaces/character.interfaces';
import { DragonBallServices } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterAddComponent, CharacterListComponent],
})
export class DragonballSuperPageComponent {

  // constructor(
  //   public dragonBallServices: DragonBallServices
  // ){  }

  public dragonballServices = inject(DragonBallServices);

  // characters = signal<Character[]>([
  //   {id: 1, name:'Goku', power: 9001 },
  //   {id: 2, name:'Vegeta', power: 8000 },
  // ])

  // addCharacter = (character: Character) => {
  //   this.characters.update(list =>[...list, character ]);
  // }
}
