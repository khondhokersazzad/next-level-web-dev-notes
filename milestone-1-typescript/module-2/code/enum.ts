enum Role{
  admin = 'Admin',
  moderator = 'Moderator',
  user = 'User',
}

// let role:Role = Role.admin 

const canEdit = (role : Role) =>{
  if (role === Role.admin || role === Role.moderator){
    return true;
  }else{
    return false;
  }
}
console.log(canEdit(Role.moderator));

