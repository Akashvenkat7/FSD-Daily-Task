//function

// basic function
let a = 10;
function firstFunction(){
    console.log('normal function');
    console.log(a);
}
  firstFunction()

//   Arrow Function ES6

   const arrowFunction=()=>{
             console.log("arrow Funct");
       
       
          }
           arrowFunction()


//   Annomous function

  const res= function (a,b){
        console.log(a,b);
  }
  res(10,20);

//   IIFE Function // Advantages( variables are used within the function)

  (function(){
     console.log("iife");
     
  })();

  //example 
   let x=10;
  (function(){
     console.log("iife");
     
  })();
  console.log(x);
  
// hof callback - asyc return

function norfun(){
     console.log("Nor fun");
     
}

// hof function consist of argument and returns a function from another function
 function hof(callback){
     console.log("higher order fun");
     callback()
     return  function  retfun(){
          console.log(" return function");
          
     }
     
 }
 
 const retRes=hof(norfun); //return function
 retRes();

   
// //return function

 function retFunc(y,z){
    console.log("retunr statement");
     return y+z
     
}

 let val=retFunc(50,100) //call this function can get return valure or func
 console.log(val);

// //Another example for hof 

function higherOrderFucntion(callback){
     console.log("hof");
     callback()
     return function returnFunction(){
          console.log("returns func");
          
     }
}
function dis(){
     console.log("function");
     
}
let result=higherOrderFucntion(dis);
result();

// //if Else statements  

let login = true

if (login == true) {
     console.log("login succesfully");
     
} else {
     console.log("invalid login details");
     
}

//else if

let proPrice = 884;

if (proPrice >= 1000) {
     console.log(">=1000");
     
} else if(proPrice >= 900){
     console.log(">=900");
     
}else if(proPrice >=800){
     console.log(">800");
     
}else{
     console.log("below 800");
     
}

// nested if

let prodPrice = 468;
if(prodPrice >=800){
     if(prodPrice <=1000){
          console.log("<=1000");
          
     }else{
          console.log(">1000");
          
     }
}else{
     console.log("<800");
     
}

///ternary operator

let price = 77
const resl = price > 50 ? "greater than 50" : "Lesser than 50"
console.log(resl);

/// Switch case

let order = 2
let msg;

switch(order){
     case 1:
          msg='I Ordered Ipad';
          break;
     case 2:
          msg='I Ordered Macbook';
          break;
     case 3:
          msg='I Ordered Iphone 16 Pro Max';
          break;
     default:
          msg='Invalid';          
}
console.log(msg);

//while //entry check

let i=3
while (i<=5) {
     console.log("i=",i);
     i++;
     
}

//do while //exit check
let j=3
do{
    console.log("i=",i);
    i--;
}while(j>=0);

//for loop

for(let i=0;i<5;i++){
     console.log("i",i);
     
}