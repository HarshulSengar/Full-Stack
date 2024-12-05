//map , filter , reduce , foreach
// their work is to transform your arr and return a new arr

// map
let arr=[1,2,3,4,5,6]
let newArr = arr.map(mymap)
//callback function because map is a function in which we pass mymap function
function mymap(item){
    return item*3;
}
console.log(newArr)

//another way
let arr2 = [1,2,3,4,5,6,7]
// let newArr2 = arr2.map((item)=>{
//     return item*5;
// })
//write arrow func in single line and without using return keyword
let newArr2 = arr.map(item => item*5);
console.log(newArr2)

//filter

let arr3 =[2,10,16,15,19,18,56]
let newArr3 = arr3.filter(item => item%2);//i%2=1 which means true thats why it is giving odd numbers as output
console.log(newArr3)//return odd numbers

//reduce
let arr4 = [10,15,20,25,30];//reduce this array in single value
let newarr4 = arr4.reduce((acc,currValue)=>{
    acc = acc+currValue;//it has two values accumulator and current value
    return acc;
},0) //here 0 is the starting value of acc
console.log(newarr4)

// Map : return a new arr
// forEach : does not return a new Arr

//forEach
let arr5 = [1,2,3,4,5]
console.log(arr5.forEach((item)=>item*5)) //undefined





//Ques: Given ans arr of numbers , filter out the even number then double the value of remaining numbers and then calculate their sum

let array = [15,19,20,22,18,13,16,11]
let newArray = array.filter(item => item%2==0);
let double = newArray.map(item => item*2)
let sum = double.reduce((acc,currValue)=>{
    acc=acc+currValue;
    return acc;
},0)
console.log(sum)

