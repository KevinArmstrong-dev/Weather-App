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


const add = (4, 5, (callback) =>{
    setTimeout(()=>{

       callback(4, 5);
    
       },2000)
})

const sum = (a , b) =>{
    return a + b;
}

console.log(add(1,3, sum));