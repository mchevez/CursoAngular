import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

function loadFromLocalStorage(): Character[] {

  const charaters = localStorage.getItem('characters');
  return charaters? JSON.parse(charaters):[];
}

@Injectable({providedIn: 'root'})
export class DragonBallServices {

  characters = signal<Character[]>(loadFromLocalStorage())

  saveToLocalStorage = effect(() =>{
    localStorage.setItem('characters', JSON.stringify(this.characters()))
  })

  addCharacter = (character: Character) => {
    this.characters.update(list =>[...list, character ]);
  }

}
