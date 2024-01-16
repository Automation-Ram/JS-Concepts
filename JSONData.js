 const  fetchUserInfo =async() =>{
try{
   const response= await fetch('https://reqres.in/api/users?page=2');
   if(!response.ok)
   {
    throw new Error('User not found...')
   }

 const userData=  await response.json();
 console.log(userData)
}
catch(err){
console.log(err)
}
}
fetchUserInfo()