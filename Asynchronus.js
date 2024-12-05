// SetInterval , classInterval , Promises , callback , async await , setTimeOut
//setTimeout provide time delay(it passes callback and delay time)
console.log("hello")
setTimeout(()=>{ //provide delay
    console.log("Run after 5sec")
},5000) //by default whole code is synchronus in js 
console.log("world")

//setInterval : it provide repeatation after particular time
let id=setInterval(()=>{
    console.log("Repeat") 
},1000)
setTimeout(()=>{
    clearInterval(id)
},8000) // after 8 sec interval stop


