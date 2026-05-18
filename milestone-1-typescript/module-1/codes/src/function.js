"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Normal Function 
function addNum(num1, num2) {
    return num1 + num2;
}
addNum(10, 5);
//Arrow Function 
const addNumArrow = (num1, num2) => num1 + num2;
addNumArrow(15, 45);
//Function in Object Method
const poorUser = {
    name: 'sazzad',
    balance: 0,
    addBalance(value) {
        const totalBalance = this.balance + value;
        return this.balance = totalBalance;
    }
};
poorUser.addBalance(100);
console.log(poorUser.balance);
//# sourceMappingURL=function.js.map