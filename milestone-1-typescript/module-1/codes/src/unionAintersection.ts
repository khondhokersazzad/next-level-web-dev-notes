type userRole = 'admin' | 'user';

const getDashBoard = (role: userRole) =>{
  if(role === 'admin'){
    return "Admin Dashboard"
  }else if (role === 'user'){
    return "User Dashboard"
  }else{
    return 'Guest Dashboard'
  }
}

console.log(getDashBoard('guest'))