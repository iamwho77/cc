// setTimeout (function () {
//      console.log("third");

// },2010) ; 
// setTimeout(function(){
//      console.log("fourth");
// },2000)

// console.log("second");
// function sync() { 
//     console.log("first");
// }
// sync() ; 

let mr = new Promise(function(resolve , reject) {
     setTimeout(function()
     {
        console.log("inside pormiset") ;
},3000 );
    // resolve(127777777121);
    reject(new Error('error aya he')); 
})

// mr.then((value) => {console.log(value)});
mr.catch((er) => { console.log(er)}) ;


