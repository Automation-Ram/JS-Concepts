let reachA=new Promise((resolve,reject)=> {

    const reached=false
    if(reached)
    setTimeout(resolve,3000,"reached")
    else
    reject("NR")
})

//async always return a promise
async function asyncstatus()
{
    try{
    console.log('hi...');
    res= await reachA
    console.log(res)
    console.log('bye')
    }
    catch(err){
        console.log(err)
    }

}
asyncstatus()
