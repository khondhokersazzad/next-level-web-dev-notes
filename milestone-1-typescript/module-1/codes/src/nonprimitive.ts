let alphabet: string[] = ["A", "B", "C"];

let mixxedArray : ( string | number)[] = ["A", 1, 2, 3, "B", "C"];

//Tuple - Fixed Array length with fixed type 


let person: [string, number] = ["Sazzad", 25];

//Object 

let user: { name: string; 
  nickName?: string; //Optional type
   age: number;
    nationality : 'Bangladesh' //literal type
  } = {
  name: "Sazzad",
  age: 25,
  nationality : 'Bangladesh',
};

console.log(user)