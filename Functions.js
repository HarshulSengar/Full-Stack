//1. function statement(hoisted)

console.log(sum(10,20))//hoisting(function load hone se phle chl jate h)
function sum(a,b) {
    console.log(a+b)
}
console.log(sum(10,20))//undefined(because it is not returning anything)
console.log(typeof(NaN))//number

//function expression(non-hoisted)
const sub = function(a,b){
    return a-b
}
console.log(sub(10,5))//5

//arrow function(non-hoisted)
const mul = (a,b)=>{
    return a*b;
}
console.log(mul(10,5))//50

//temperal dead zone




// Execution context : It provides you all the ingrident to run your code(GEC , FEC , Eval)
// GEC : global Execution(only one for a file)
// fec : function Execution
// eval : to evaluate String(MAthematical expression)
