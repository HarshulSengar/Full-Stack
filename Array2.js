let arr1 = [1,2,4,6,8]
let arr2 = arr1
arr2.push("hello")
console.log(arr1)//change occur in both arr1 and arr2
console.log(arr2)

//dynamic memory allocate in heap and static memory in stack


//merging of array

let arr3 = [2,3,6,7,8]
let arr4 = [3,5,6,8,9]
let arr5 = [...arr3 , ...arr4]//merge arr3 and arr4
console.log(arr5)

arr3.push("hello")
arr5 = arr3.concat(arr4)//same as above(for two aaray merging)
console.log(arr5)

//object : collection of key:value pair
//datatype of key is always string

let person = {
    firstName : "Harshul",
    LastName : "Sengar",
    age : 20,
    salary : 40000000,
    Details : {
        Id : 45879803,
        title : "manager",
        language : "english"

    }
}
console.log(person)
console.log(person.age)//20 (where we use . we cal it object chaining)
console.log(person.Details)
console.log(person)

console.log(person["age"])//20
for(let key in person){
    console.log(person[key])//values
}

for(let key in person){
    console.log(key)//keys
}







