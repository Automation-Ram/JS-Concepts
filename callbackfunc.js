function printinfo(name,callback){

    setTimeout(function()
    {
        console.log("Printing info for "+name);
        callback("Plz call me back...");
    },5000);

}

function displayMsg(msg)
{
console.log(msg);
}
printinfo("Ram", displayMsg);