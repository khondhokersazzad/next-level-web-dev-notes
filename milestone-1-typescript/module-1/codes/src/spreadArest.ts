//spread operator


const numbers: number[] = [5, 12, 8, 130, 44, 72, 19, 3, 27, 91];
const fruits: string[] = ["Apple", "Banana", "Cherry", "Mango", "Orange", "Pineapple", "Grapes", "Strawberry", "Kiwi", "Watermelon"];


const mixed = [...numbers, ...fruits];

// console.log(mixed);

//Cloning Array with spread 

const numbers2: number[] = [5, 12, 8, 130, 44, 72, 19, 3, 27, 91];

const cloneNum3 = [...numbers2];

// console.log(cloneNum3);


//merging obj with spread operator
//for marging obj into one , then the obj property must be unique

const product1 = {
  id: 1,
  name: "Laptop",
  price: 750,
  inStock: true
};

const product2 = {
  id2: 2,
  name2: "Headphones",
  price2: 120,
  inStock2: false
};


const allProducts = {...product1, ...product2};

//console.log(allProducts);


//Rest operator

const sendInvite = (...friends:string[]) =>{
  friends.forEach((friend) =>{
    console.log(`Send Invitation to ${friend}`)
  })
}

console.log(sendInvite('Habib','Karar','Shopon'));
