//HOF(higher order function) : under which we pass another function
function calculator(add, sub , mul , div){
    //let a=10;
    //let b=5;
    console.log(add(a,b));
    console.log(sub(a,b));
    console.log(mul(a,b));
    console.log(div(a,b));
}

function add(a,b){
    return a+b;

}

function sub(a,b){
    return a-b;

}

function mul(a,b){
    return a*b;

}

function div(a,b){
    return a/b;

}

calculator(add , sub , mul , div)

//for call back func we have to pass all the functions in parameters