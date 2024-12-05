//closure
function fun1(){
    let a=10;
    let b= 20;
    function fun2(){//fun2 lecial scope uske parent ka environment h means fun1
        return a+b;
    }
    return fun2;
}
//console.log(fun1()) //returnning fun1
let ans = fun1()
console.log(ans())//here calling of function2 is occuring








function call1(){
    let a=10;
    let b=20;
    function call2(){
        let c = 40;
        function call3(){
            return a+b+c;
        }
        return call3;
    }
    return call2;
}
console.log(call1()()())//70