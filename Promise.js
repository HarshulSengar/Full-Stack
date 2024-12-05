// fullfill , reject
// let p = new Promise((resolve,reject)=>{
//     let a = 20;
//     let b=30;
//     if(a+b > 55){
//         return resolve(a+b);
//     }
//     else{
//         return reject("sum of a & b is less is less than 55")
//     }
// })

// p.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// });






// 







fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
})