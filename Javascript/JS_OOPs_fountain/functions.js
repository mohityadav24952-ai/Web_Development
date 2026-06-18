
// function greet(name){
//      console.log(`Hello ${name}`);
     
// }
// greet("mohit");


// function orderTea(teaType){
//     function cnforder(){
//         return `order for chai is confirmed`;
//     }
//     return cnforder() ;
// }

// let order = orderTea("milk");
// console.log(order);


// function calct(price , quantity){
//     return price*quantity ;
// }

// let money = calct(10 , 50);
// console.log(money);


//  ----ARROW FUNCTION --------
//  const calct =(price , quantity) =>{
//     return price*quantity ;
// }

// let money = calct(499 , 74999);
// console.log(money);



// -------HGHER ORDER / FIRST CLASS FUNCTIONS 
// function makeTea(teatype){
//     return `making ${teatype}`;
// }
// function processTeaOrder(makeTea ){
//     return makeTea("earl grey");
    
// }
// let order = processTeaOrder(makeTea);
// console.log(order);


// --- NESTED FUNCTIO ---

function func(teatype){
    return `making ${teatype}`;
}
function createTeamaker(){
    return func("lemon");
}

let order = createTeamaker();
console.log(order);
