"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parent {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numOfHour) {
        return `${this.name} is Sleeping for ${numOfHour} hours`;
    }
}
class Student extends Parent {
}
class Teacher extends Parent {
    designation;
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
}
const s1 = new Student('Sazzad', 25, 'Bangladesh');
const t1 = new Teacher('Mr. A', 35, 'Dhaka', 'Professor');
console.log(t1);
//# sourceMappingURL=inheritance.js.map