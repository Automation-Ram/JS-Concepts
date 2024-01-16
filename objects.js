class customer
{
    constructor(name,product){
    this.name=name;
    this.product=product;
    }

    addToCart()
    {
        console.log('${this.product} added to cart');
    }
    
}
const cust1=new customer("Ram","Mac Book");
console.log(cust1.name);
console.log(cust1.product);
cust1.addToCart();