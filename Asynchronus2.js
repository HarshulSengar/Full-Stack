function downloadBook(unzipped){
    setTimeout(() => {
        //fetch url
        console.log("book download");
        unzipped()
    }, 5000);
    
}

function unzipped(){
    setTimeout(()=>{
        console.log("book unzipped");
        setTimeout(()=>{
            console.log("book parsing")
            setTimeout(()=>{
                console.log("book read & analyzed properly");
                setTimeout(()=>{
                    console.log("book uploaded successfully")
                },3000)
            },2000)
        },3000)
    },2000)

    //this pyramid is called as callback hell
}

downloadBook(unzipped);                        