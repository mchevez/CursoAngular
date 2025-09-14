import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
  templateUrl: './hero-page.component.html',
  imports: [ UpperCasePipe ]
})

export class HeroPageComponent{

    name = signal('Ironman');
    age = signal(45);

    //getHeroDescription = () => `${ this.name() } - ${ this.age() }`
    heroDescripcion = computed(() =>{
      const description = `${ this.name() } - ${ this.age() }`;
      return description;
    })

    capitalizedName = computed(() => this.name().toUpperCase())

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
