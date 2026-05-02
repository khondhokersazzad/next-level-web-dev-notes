//Normal Function 
function addNum (num1 : number, num2 : number): number{
  return num1 + num2;
}
addNum(10,5);



//Arrow Function 
const addNumArrow = (num1 : number, num2 : number) : number => num1 + num2;
addNumArrow(15,45);




//Function in Object Method
const poorUser = {
  name : 'sazzad',
  balance : 0,
  addBalance(value : number):number{
    const totalBalance = this.balance + value;
    return this.balance = totalBalance;
  }
}
poorUser.addBalance(100);
console.log(poorUser.balance)


