setTimeout(()=>{
    console.log("Two seconds are up");
},2000);

const names = ["Andrew,", "Kevin","Jenny"];

const shortNames = names.filter((name)=> {
    return name.length <= 5;
})

const geocode = (address, callback) => {
   setTimeout(()=>{
    const data = { 
        latitude:0,
        longitude:0
    }

   callback(data);

   },2000)

}

const data = geocode ('Montreal', (data) =>{
    console.log(data);

});


const add = (a, b, (sum) =>{
    setTimeout(()=>{

       sum(1, 4);
    
       },2000)
})

const sum = (a , b) =>{
    return a + b;
}

add(1,3)