import { Component, signal } from "@angular/core";


@Component({
  templateUrl: './hero-page.component.html'
})

export class HeroPageComponent{

    name = signal('Ironman');
    age = signal(45);

    getHeroDescription = () => `${ this.name() } - ${ this.age() }`

    changeHero = () =>{
      this.name.set('Spiderman');
      this.age.set(22);
    }

    resetForm = () => {
     this.name.set('Iroman');
     this.age.set(45);
    }

    changeAge(age: number) {
      this.age.set(age)
    }
}
