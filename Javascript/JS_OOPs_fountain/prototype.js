let comp = {cpu : 12};
let lenovo = {
    screen : "HD" ,
    __proto__: comp ,
};

// console.log('lenovo' , lenovo.__proto__);
// console.log("comp", comp.__proto__);




// SAME BUT BETTER 
let genericCar = {tyres: 4}

let tesla = {
     driver: "AI"
};

Object.setPrototypeOf(tesla,genericCar); // get properties o ftesla in generic car

console.log('genericCar' , genericCar);
console.log('tesla', Object.getPrototypeOf(tesla));