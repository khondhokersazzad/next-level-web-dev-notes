interface Iuser {
  name: string;
  age : number;
}

//Extending a Interface

interface IuserRole extends Iuser{
  role: 'admin' | 'user' | 'guest';
}

const user: IuserRole ={
  name : 'Suvendo',
  age: 39,
  role: 'user',
}


