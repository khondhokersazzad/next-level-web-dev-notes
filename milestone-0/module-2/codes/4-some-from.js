const currentUserRoles = ['user', 'editor','moderator'];
const featureAccessRoles = ['admin','moderator'];

const userCanAccess = currentUserRoles.some(role => featureAccessRoles.includes(role));

console.log(userCanAccess);


//Array from method

const arr = Array.from({ length: 5 }, (_, i) => i);

console.log(arr);

