import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

@Injectable({providedIn: 'root'})
export class DragonBallServices {

  characters = signal<Character[]>([
    {id: 1, name:'Goku', power: 9001 },
    {id: 2, name:'Vegeta', power: 8000 },
  ])

  addCharacter = (character: Character) => {
    this.characters.update(list =>[...list, character ]);
  }

}
