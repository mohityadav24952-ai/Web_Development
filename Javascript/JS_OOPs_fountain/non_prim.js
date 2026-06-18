// OBJECTS

let user = {
    first : "mohit",
    isloggedin : true,
    "come back" : "paglu" 
};

user.last  = "back" ;

console.log(user["come back"]);
console.log(user);
console.log(user.first);
console.log(typeof user);


user.first = "Champ" ;
console.log(user.first);
console.log(user.last);


//BUILT IN OBJECTSS
let today = new Date();
console.log(today.getDate());

// ARRAY

let heroes = [ "a" , "b" , 687 , true];
console.log(heroes[0]);
console.log(typeof heroes);

//  JS IS SMARTER
console.log(1 + "1");
let isvalue = true ;

console.log(isvalue + 1);

console.log(Number(null));

console.log(Number(undefined));
