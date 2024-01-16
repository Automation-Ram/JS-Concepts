let num=[1,2,3,4,5];
let accNum= num.reduce((acc,num)  => acc+num,0);
console.log(accNum);


let cartItem=[
    {name:"Apple",price:100},
    {name:"oran",price:33300},
    {name:"ban",price:50000},
    {name:"ared",price:14440}
]

let totalcost=cartItem.reduce((total,item)=> total+item.price,0);
console.log(totalcost);