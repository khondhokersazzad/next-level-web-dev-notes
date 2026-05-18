//Public, Private , protected

//Private

class Person{
  name: string;
  age: number;
  private nid: number;
  protected grade : string;
  constructor(name: string, age: number, nid: number, grade : string){
    this.name = name;
    this.age = age;
    this.nid = nid;
    this.grade = grade;
  }
  getNidNumber(){
    console.log(`${this.name}'s Nid number is ${this.nid}`);
  }
}

class Student extends Person{
   constructor(
    name: string,
    age: number,
    nid: number,
    grade: string
  ) {
    super(name, age, nid , grade);
  }

  getGrade() {
    console.log(`${this.name} got ${this.grade}`);
  }

  getNid(){
    console.log(`${this.name} got ${this.nid}`);

  }

}


const person1 = new Person ('Motin', 34, 444444890,'A+');
const person2 = new Student ('Rajj', 34, 444444890,'A+');

person2.getGrade(); // Accessible as protected can accesible from Child Class as well
person2.getNid(); // Not accessible because of Private


//person1.nid = 4555555;// nid is private so it can't be accessible outside the class block

//console.log(person1.nid);


