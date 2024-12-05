console.log("hello")
function waitAsec(){
    let curr_time = new Date().getTime();
    let fut_time = curr_time + 1000; //curr time me add kiys humne 1sec(future time)
    while(new Date().getTime() < fut_time);
}
//console.log(new Date().getTime()); // jb se computer legalise hua h tb se le kr ab tk ka time return krta h (current time return)
//waitAsec(); // hello immediately print ho rha h but world 1 sec bad print hoga


function waitNsec(n){
    for(let i=0 ; i<n ; i++){
        waitAsec();
    }
}
waitNsec(6); //6 sec delay
console.log("world")




