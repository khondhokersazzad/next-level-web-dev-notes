//Obj Destructuring

const user = {
  id: 1,
  name: "Sazzad",
  contact: {
    email: "sazzad@example.com",
    phone: "123-456-7890"
  },
  address: {
    city: "Pabna",
    country: "Bangladesh"
  }
};


// const userName = user.name;
// const email = user.contact.email;

const {contact : {email}} = user; //nested destructuring

const {name : userName} = user;

console.log({userName,email})

//Array Destructuring

const bestFriends = ['Hasib','Karim','Shamim'];

const [,myBestFriend,] = bestFriends;

console.log(myBestFriend);
