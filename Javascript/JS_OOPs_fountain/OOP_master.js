// ==========================================
// PART 1: ANIMAL WALA CONCEPT (How Objects Inherit)
// ==========================================




// 1. Blueprint (Constructor Function) banaya
function Animal(type) {
  this.type = type;
}

// 2. Animal ke prototype (main backup) mein 'speak' method daal diya
Animal.prototype.speak = function () {
  return `${this.type} makes a sound.`;
};

// 3. Naya object banaya 'Animal' ke use se
const myDog = new Animal("Dog");

// 4. Test karte hain (Prototypal chain active hogi)
//console.log("--- Part 1: Animal Output ---");
//console.log(myDog.speak()); // Output: Dog makes a sound.

// ==========================================
// PART 2: HITESH BHAI WALA ARRAY EXPERIMENT
// ==========================================

// 1. JavaScript ke built-in global Array ke prototype mein naya method ghusa diya
Array.prototype.hitesh = function () {
  // Yahan 'this' ka matlab hai wo array jo isko call karega
  return `Custom method ${this}`;
};

// 2. Ek array banaya
let myArray = [1, 2, 3];

// 3. Dusra array banaya
let myNewArray = [1, 2, 3,4,5,6];

// 4. Test karte hain (Dono arrays ke paas .hitesh() access ho jayega)
//console.log("\n--- Part 2: Array Output ---");
//console.log(myArray.hitesh()); // Output: Custom method 1,2,3
//console.log(myNewArray.hitesh()); // Output: Custom method 1,2,3


// ----CREATE CLASS----

class Vehicle{
    constructor(make , model){
        this.make = make ;
        this.model = model ;
    }

    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}

class Car extends Vehicle{

    drive(){
        return `${this.make} : THis is an inheritance example`;
    }
}

let mycar = new Car("Toyota ", "corolla");
//console.log(mycar.start());
//console.log(mycar.drive());






//      ENCAPSULATION

class BankAccount{
    #balance = 69; // nonody outside the class can access it

    deposit(amount){
        this.#balance += amount ;
        return this.#balance ;
    }

    getbal(){
        return `${ this.#balance}`;
    }
}

let account = new BankAccount();
//console.log(account.getbal());



// ABSTRACTION // POLYMORPHISM // STATIC // GETTERS AND SETTERS
// YOU KNOW IT BHAI ,,,,,,BKI COPY ME EXAMPLE OCE4 LIKHA HAI



