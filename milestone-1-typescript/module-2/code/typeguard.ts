const studentId = (input: string | number) => {
  if (typeof input === "string") {
    console.log("String");
  } else if (typeof input === "number") {
    console.log("number");
  }
};

studentId("szzad");

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

getUserInfo({ name: "RObin", role: "moderator" });
