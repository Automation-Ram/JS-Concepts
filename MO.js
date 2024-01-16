class Car
{
    constructor(make,model) {
        this.make=make;
        this.midel=model;
        
    }

    startEngine()
    {
        console.log("Start by Car")
    }
}

class Audi extends Car{
    startEngine()
    {
        console.log("Strt Audi");
    }
}

 const aud=  new Audi("Korea","Audi");
 aud.startEngine();