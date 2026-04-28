const set = new Set(); //creating new set

set.add('apple');
set.add('banana');

set.add('banana'); //adding duplicate will have no impact


console.log(set);

//Arr to set
const arr = ['bd', 'india' , 'pak'];
const arrToSet = new Set(arr);
console.log(arrToSet);

//Set to Array
const setToArr = Array.from(arrToSet);
setToArr.push('aus')
console.log(setToArr.length)
console.log(setToArr)

//Duplication Removal timing checker

const test = ['Bangla', 'English', 'Math', 'Physics', 'Math', 'English'];

//Using Array
const removeDupArr = (test) =>{
  const newArr = [];
  
  test.forEach(sub =>{
    if(!newArr.includes(sub)){
    newArr.push(sub);
  }
  })
  return newArr;
}
//Using Set
console.log(removeDupArr(test));

const removeDupSet = (test) =>{
  const set = new Set(test);
  return Array.from(set);
}

console.log(removeDupSet(test));
