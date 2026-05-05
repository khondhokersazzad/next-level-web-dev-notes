//Nullable 

const getuser = (input : string | null)=>{
  if(input){
    console.log(`DB for ${input}`);
  }else{
    console.log(`DB for All USer`);
  }
}

getuser(null)