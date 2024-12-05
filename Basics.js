//remove all 2 from array
let arr = [1,2,3,2,4,5,6]
let r = 2
for(let i=0 ; i<arr.length ; i++){
    if(arr[i]==r){
        arr.splice(i,1);
    }
}
console.log(arr);

let arr2 = [2,3,4,2,5,7,8,5,9,3]
console.log(arr2.indexOf(4))//2
console.log(arr2.lastIndexOf(5))//7
//finindex take callback function not value

//loops
//1. for of loop 2. for in loop

const arr3 = [3,5,2,6,9,5,3,5]
for(let i of arr3){//iterate over value
    console.log(i) //for of loop (print all values of array)
}

for(let i in arr3){//iterate over index
    console.log(i)//for in loop (print index of all values of array)
}

for(let i in arr3){
    console.log(arr3[i])//to print values from for in
}

//deep copy(element copy)
//shallow copy(address copy)



