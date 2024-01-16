const getData=()=>{

return new Promise((resolve,reject)=>{
    setTimeout(()=>
    {
        resolve("Data from getData");
    }),2000;
});

};
const getError=()=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            reject("Error: Data no av");
        }),2000;
    });
    
    };

    Promise.allSettled([
        getData(),
        getError()
    ])

    .then(results => {

        results.forEach(result=> {
            if(result.status==='fulfilled'){
                console.log("Value:", result.value);
            }
            else{
                console.log("reason for rejected",result.reason);
            }
        })
    })