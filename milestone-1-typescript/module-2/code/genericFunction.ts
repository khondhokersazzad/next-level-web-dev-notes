//Generic Function that create a Array
const createArrayWithGeneric = <T>(value: T)=>{
  return [value];
}

const arrString = createArrayWithGeneric('Apple');
const numString = createArrayWithGeneric(25);

//Generic Function with Tuple

//Normal Function with Tuple
const createTupleWithNormal = (params1: string, params2: number)=>{
  return [params1, params2];
}

console.log(createTupleWithNormal("20",78))

//Generic Function with Tuple
const createTupleWithGeneric = <X,Y> (param1: X, param2: Y) =>{
  return [param1,param2];
}

// console.log(createTupleWithGeneric(false,23));
// console.log(createTupleWithGeneric("false",23));
// console.log(createTupleWithGeneric("Array","23"));

type Student ={
  studentId:string,
  name: string,
  
}

const addStudentToCourse = <T extends Student>(studentInfo: T)  =>{
  return {
    courseName : 'Next Level',
    ...studentInfo,

  }
}

const student1 = {
  studentId: 'NL-101',
  name: 'Alis',
  age: 25,
  hasPC: false,

  
}

const student2 = {
  studentId: 'NL-102',
  name: 'Nehal',
  age: 30,
  hasPC: true,
  hasCar: true

  
  
}

console.log(addStudentToCourse(student2));










