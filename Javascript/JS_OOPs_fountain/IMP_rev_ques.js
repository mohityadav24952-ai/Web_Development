//----------------- PROTOTYPE CHAINING---------------


// 1. Animal Constructor aur uska method
function Animal() {}

Animal.prototype.speak = function () {
  return "Animal speaking";
};

// 2. Dog Constructor
function Dog() {}

// 3. Object.setPrototypeOf use karke prototype chain banana
// Yeh line Dog.prototype ka prototype Animal.prototype ko bana degi
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// 4. Dog ka apna method add karna
Dog.prototype.bark = function () {
  return "Woof!";
};

// 5. Dog ka ek naya object banaya
const myDog = new Dog();

// 6. Methods ko call karke console mein print karwana
//console.log(myDog.bark());  // Output: Woof!
//console.log(myDog.speak()); // Output: Animal speaking (Kyunki Dog ne Animal se inherit kiya hai)



// ----FUNCTIONAL CHARACTER AND ERROR----

function Person(name, age) {
  this.name = name;
  this.age = age;

  if (age < 0) {
    throw new Error("Age must be a positive number");
  }

  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
}

const p = new Person("mohit" , 20);
//console.log(p.greet());


//----CLASS , OBJECTS AND INHERITANCE -----

// --- TASK 1, 2 & 3: Main 'Vehicle' Class ---
class Vehicle {
    constructor(make, model) {
        this.make = make;   
        this.model = model; 
    }

    // Task 1: Details return karne ke liye
    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }

    // Task 2: Basic move method
    move() {
        return "The vehicle is moving";
    }

    // Task 3: Static method to check instance
    static isVehicle(obj) {
        return obj instanceof Vehicle;
    }
}

// --- TASK 1 & 2: Subclass 'Car' ---
class Car extends Vehicle {
    // Task 1: Car specific method
    startEngine() {
        return "Engine started";
    }

    // Task 2: Method Overriding
    move() {
        return "The car is driving";
    }
}

// ========================================================
// 🔥 ADDUP CODE: Console me print karwane ke liye testing 🔥
// ========================================================

//console.log("--- 🚗 TESTING CAR CLASS ---");
// 1. Car ka ek naya object banaya
const myCar = new Car("Tata", "Nexon");

// 2. Car ke saare methods ko console me print karwaya
//console.log(myCar.getDetails());  // Output: Make: Tata, Model: Nexon (Parent se aaya)
//console.log(myCar.startEngine()); // Output: Engine started (Car ka apna hai)
//console.log(myCar.move());        // Output: The car is driving (Overridden method)
//
//console.log("\n--- 🚙 TESTING VEHICLE STATIC METHOD ---");
//// 3. Static method ko bina object banaye seedhe class name se call kiya
//console.log("Kya myCar ek Vehicle hai?:", Vehicle.isVehicle(myCar)); // Output: true
//
//const randomObj = { name: "John" };
//console.log("Kya randomObj ek Vehicle hai?:", Vehicle.isVehicle(randomObj)); // Output: false



/* ================================================================================
📝 QUESTION SAMJHO (KAUNSA TASK KYA BOL RAHA HAI):
================================================================================
👉 TASK 1 (BankAccount):
   - Ek BankAccount class banani hai jisme balance ko chupake (`_balance`) rakhna hai (Encapsulation)।
   - Koi bhi seedhe account._balance karke galti se paise negative na kar de, 
     isliye hum 'getter' aur 'setter' ka use karke condition lagayenge ki balance kabhi negative na ho।
   - Saath mein deposit() aur withdraw() methods bhi dene hain।

👉 TASK 2 (Polymorphism & Method Overriding):
   - Ek main Shape class banani hai jiska area() method default mein 0 return karega।
   - Fir do subclasses (Circle aur Rectangle) banani hain jo Shape se properties inherit karengi,
     lekin apna khud ka area() nikalne ka formula lagayenge (Method Overriding)।
================================================================================
*/

// ==========================================
// 🔥 TASK 1: BankAccount Class (Encapsulation)
// ==========================================
class BankAccount {
    constructor(initialBalance) {
        // _balance ko convention ke mutabik private ki tarah treat karte hain
        this._balance = initialBalance;
    }

    // Getter: Bahar se balance check karne ke liye (eg: account.balance)
    get balance() {
        return this._balance;
    }

    // Setter: Balance ko safe tareeqe se update karne ke liye (eg: account.balance = 500)
    set balance(amount) {
        if (amount < 0) {
            console.log("❌ Error: Balance negative nahi ho sakta!");
        } else {
            this._balance = amount;
        }
    }

    // Paise jama karne ke liye method
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        }
    }

    // Paise nikalne ke liye method (Yahan condition lagayi taaki balance negative na ho)
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
        } else {
            console.log("❌ Error: Insufficient balance ya invalid amount!");
        }
    }
}


// ========================================================
// 🔥 TASK 2: Shape, Circle, aur Rectangle (Polymorphism)
// ========================================================

// Base Class: Shape
class Shape {
    area() {
        return 0; // Default area 0 hoga
    }
}

// Subclass 1: Circle (Shape se extend ho raha hai)
class Circle extends Shape {
    constructor(radius) {
        super(); // Parent class ke constructor ko call kiya
        this.radius = radius;
    }

    // Method Overriding: Circle ke liye area calculate kiya (π * r * r)
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

// Subclass 2: Rectangle (Shape se extend ho raha hai)
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    // Method Overriding: Rectangle ke liye area calculate kiya (L * B)
    area() {
        return this.width * this.height;
    }
}


// ========================================================
// 🛠️ ADDUP CODE: Console me test karne ke liye
// ========================================================

console.log("--- 🏦 TESTING TASK 1: BankAccount ---");
const myAccount = new BankAccount(1000); // Initial balance 1000 daala
myAccount.deposit(500);                  // 1000 + 500 = 1500
myAccount.withdraw(200);                 // 1500 - 200 = 1300
console.log("Final Balance:", myAccount.balance); // Output: 1300

myAccount.balance = -500;                // Setter isko block karega aur error print karega

console.log("\n--- 📐 TESTING TASK 2: Polymorphism ---");
const myCircle = new Circle(5);
console.log("Circle Area:", myCircle.area().toFixed(2)); // Output: 78.54

const myRectangle = new Rectangle(10, 5);
console.log("Rectangle Area:", myRectangle.area());     // Output: 50