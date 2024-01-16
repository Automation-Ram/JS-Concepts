let color=['red','green','yellow'];
color.push("Black");
console.log(color);
console.log("---------------");
color.pop();
console.log(color);
console.log("---------------");
color.shift();
console.log(color);
console.log("---------------");
color.unshift("Redd");
console.log(color);
console.log("---------------");
let animals=['tiger','lion','rh','ed'];
animals.splice(1,1,"PIhynaNK");
console.log(animals);
console.log("---------------");
let newanimals=animals.slice(1,2);
console.log(newanimals);
console.log("---------------");
let flag=animals.includes('lion');
console.log(animals);
console.log("---------------");
let bank=["SBI","HDFC","ICICI"];
let flag2=bank.includes("SBI");
console.log(flag2);
console.log("---------------");
let n=[1,2,3,4,5,6];
n.forEach((e) => {

    console.log(e);
})




