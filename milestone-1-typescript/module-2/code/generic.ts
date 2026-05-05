

//Generic Array Define
type genericArray<T> = Array<T>


// const friends: string[] = ['A','B', 'C'];
// const friends: Array<string> = ['A','B', 'C'];
const friends: genericArray<string> = ['A','B', 'C'];

// const friendsAge: number[] = [1,2,3];
const friendsAge: Array<number> = [1,2,3];

// const friendsEligibility : boolean[] = [true, false, true]
const friendsEligibility : Array<boolean> = [true, false, true]


//Generic Tuple 


//Normal way to write Tuple
// type Coordinates = [number, number]; 
type Coordinates<X,Y> = [X,Y] // with Generic type

const coordinates1 : Coordinates<number,number> = [20,30];
const coordinates2 : Coordinates<string,string> = ['A', "B"];

type User = {
  name: string,
  age: number,
}

//Generic Array of Object
const userList : genericArray<User> = [
  {
    name: 'A',
    age: 25,
  },

  {
    name: 'B',
    age: 27,
  },

  


]





























































