"use strict";
//Class is a blueprint for creating object
Object.defineProperty(exports, "__esModule", { value: true });
// class Animal{
//   species : string;
//   sound : string;
//   constructor(species: string, sound  : string){
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound() {
//     return(`${this.species} is barking ${this.sound}`);
//   }
// }
class Animal {
    species;
    sound;
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        return (`${this.species} is barking ${this.sound}`);
    }
}
const dog = new Animal('Dog', 'Ghew Ghew');
console.log(dog.makeSound());
//# sourceMappingURL=class.js.map