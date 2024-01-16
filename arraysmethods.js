let num=[1,2,3,4,5];
let doublenum=num.map((e)=> e*2);
console.log(doublenum);

let fahTemp=[12,23,45,65,212];

function cel(fah){
    return (fah -32)*(5/9);
}

let mapcel=fahTemp.map(cel);
console.log(mapcel);