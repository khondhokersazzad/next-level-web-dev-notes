# Module 4: Advanced Backend Structuring & User Authentication

---

##  What I Learned
- Express Typescript Namespace
- Implementing RBAC System
- Refresh Token
- Refresh Token to Access Token



---

##  Key Concepts

### Express Typescript Namespace
Concept: Modular is a file organizing method to organize file in a feature based mvc pattern.

In this method we organize file in to different folder/features based way.


---

### Step by step Process of organizing file 


- Cleaning up the server file
- Seperating server file into app file
- Seperating DB file from server file()
- Creating Modules for user and creating routes module for user
- Seperating controller code from user routes and creating user controller 
- Created service file which includes database query 
- created user interface file containing user types and updated payload types


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

