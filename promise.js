const randomNumpromis=new Promise((resolve,reject) => {

    setTimeout(()=>{
       const randomValue= Math.random();
       if(randomValue > 0.5){
        resolve(randomValue);
       }else{
        reject(new Error("Value is too small"));
       }

    },2000);
    
});
randomNumpromis 
.then(result => {

console.log("Promise fullfilled :" +result);
})
.catch(error => {
    console.error("Promis is rejected" +error);
});

