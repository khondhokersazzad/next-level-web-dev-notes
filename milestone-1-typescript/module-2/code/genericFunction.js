"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Generic Function that create a Array
const createArrayWithGeneric = (value) => {
    return [value];
};
const arrString = createArrayWithGeneric('Apple');
const numString = createArrayWithGeneric(25);
//Generic Function with Tuple
//Normal Function with Tuple
const createTupleWithNormal = (params1, params2) => {
    return [params1, params2];
};
console.log(createTupleWithNormal("20", 78));
//Generic Function with Tuple
const createTupleWithGeneric = (param1, param2) => {
    return [param1, param2];
};
const addStudentToCourse = (studentInfo) => {
    return {
        courseName: 'Next Level',
        ...studentInfo,
    };
};
const student1 = {
    studentId: 'NL-101',
    name: 'Alis',
    age: 25,
    hasPC: false,
};
const student2 = {
    studentId: 'NL-102',
    name: 'Nehal',
    age: 30,
    hasPC: true,
    hasCar: true
};
console.log(addStudentToCourse(student2));
//# sourceMappingURL=genericFunction.js.map