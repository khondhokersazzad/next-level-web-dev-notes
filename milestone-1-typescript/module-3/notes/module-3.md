# Module 2: Advance type of TypeScript

---

##  What I Learned
- class
- inhertance
- typeof 
- in 
- instance of 


---

##  Key Concepts

### Class
Concept: Class is a blueprint for making object with properties and methods.

Class tells
- What `properties` should an object have
- what `methods`/action it should perform

```typescript
class Animal {
  species: string;

  constructor(species: string) {
    this.species = species;
  }

  makeSound() {
    console.log("Sound");
  }
}
```

---

### Type Guard(typeof)
Concept: typeof is used to check the type of property and it is used to type narrowing or specifing the type

```typescript
const studentId = (input : string | number)=>{
  if( typeof input === 'string' ){
    console.log('String')
  }else if (typeof input === 'number'){
    console.log('number');
  }
}

```
---
### Type Guard(in)

`in` basically checks the property of a obj and returns a `boolean` value.

```typescript
//type guard in
type normalUser = {name: string};
type adminUser = {name: string;role: string;};
const getUserInfo = (user: normalUser | adminUser) => {
  if ("role" in user) {
    console.log(`${user.name} and ${user.role}`);
  } else {
    console.log(`${user.name}`);
  }
};

getUserInfo({ name: "Robin", role: "moderator" });
```
---

