class Person {
  name : string;
  age: number;
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  getSleep(numOfHour: number){
    console.log(`${this.name} is Sleeping for ${numOfHour} hours`);
  }
}

class Student extends Person {
  constructor(name: string, age: number){
    super(name,age)
  }

  doStudy(numOfHour: number){
    console.log(`${this.name} study ${numOfHour} hours`)
  }

}

class Teacher extends Person{
  takeClass(numOfHour: number){
    console.log(`${this.name} takes class ${numOfHour} hours`);
  }
}

// Function Guard 

const isStudent = (user : Person)=>{
  return user instanceof Student;
}


const getPersonInfo = (user: Person)=>{
  if(isStudent(user)){
    console.log(user.doStudy(5));
  }else if (user instanceof Teacher){
    console.log(user.takeClass(4));
  }
}


const student1 = new Student ('Alif',25);
const teacher1 = new Teacher ('Rahim', 39)

getPersonInfo(student1);
