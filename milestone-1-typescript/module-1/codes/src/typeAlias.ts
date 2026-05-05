
type Contact = {
  email: string,
  phone: string,
}

type Address = {
  city: string,
  country: string,
}

type User = {
  id: number,
  name: string,
  contact: Contact,
  address: Address,
  hobbies: string[],
}



//Object Type Alias
const user: User = {
  id: 1,
  name: "Sazzad",
  contact: {
    email: "sazzad@example.com",
    phone: "123-456-7890"
  },
  address: {
    city: "Pabna",
    country: "Bangladesh"
  },
  hobbies: ["Coding", "Cycling", "Reading"]
};


//Function Type Alias

type AddFunc = (num1 : number,num2 : number) => number; //Function type Alias

const addFunc:AddFunc = (num1,num2) => num1 + num2;