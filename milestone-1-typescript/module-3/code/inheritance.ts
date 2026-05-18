class Parent {
  constructor(public name: string, public age: number, public address: string){}
  getSleep(numOfHour: number){
    return `${this.name} is Sleeping for ${numOfHour} hours`
  }
}

class Student extends Parent{}

class Teacher extends Parent{
  constructor(name: string, age: number, address: string, public designation : string){
    super(name,age,address);
  }
}

const s1 = new Student ('Sazzad',25,'Bangladesh');
const t1 = new Teacher('Mr. A', 35,'Dhaka','Professor')

console.log(t1);