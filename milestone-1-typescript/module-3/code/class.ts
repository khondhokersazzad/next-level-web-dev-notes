//Class is a blueprint for creating object

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

class Animal{
  
  constructor(public species: string, public sound  : string){
  }
  makeSound() {
    return(`${this.species} is barking ${this.sound}`);
  }

}

const dog = new Animal ('Dog','Ghew Ghew');

console.log(dog.makeSound());