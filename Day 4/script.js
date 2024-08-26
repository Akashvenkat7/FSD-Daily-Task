// Hoisiting

console.log(a);

var a = 10;


let b = 20;

const c = 30;
console.log(b);

// Function Hositing

hoisiting()     // calling from anywhere 

function hoisiting(){
    let order = 700
    console.log(order);
    
}

// calling arrow function cannot be access befor intilaize


const arrowFunction=()=>{
    console.log("arrow");
    
}
arrowFunction();

//scope
//global scope can be access from anywhere
//function scope can be access within the function

let gs=10
function scope(){
    let fs=20
    console.log(gs);
    console.log(fs);
    function ProFun(){
        console.log(fs);
    }
    ProFun()  //nested fucnction 
}

scope();

console.log(gs);


//interview question 

function top(){
    console.log("top function");

    function bottom(){
        console.log("bottom function");
        
    }
    return bottom
    
}

const bottomFunction = top();
bottomFunction();  //this is how to call bottom function, outside the top scope


//Array

let array=["Akash","Bharath","Charan","Deepak","Elango"]
console.log(array.length);


//push and pop methods

array.push("Giri")
console.log(array);

array.pop("Giri")
console.log(array);

//shift and unshift methods

array.unshift("Zero")
console.log(array);

array.shift("Zero")
console.log(array);

//slice method

const retSlice=array.slice(1,3) // n-1 = 3-1= 2 index
console.log(retSlice);
console.log(array);

//splice method
//add, remove and replace

const retSplice=array.splice(1,3)
console.log(retSplice);
console.log(array);

//add
array.splice(1,0,"Yugi","Aravind","Thamizh")
console.log(array);

//replace

array.splice(4,1,"Zack")
console.log(array);

//delete

array.splice(1,4)
console.log(array);

array.splice(1,0,"Dhakshna","Keerthi")
console.log(array);

//Foreach concept

let looping=[100,200,300,400,500]

looping.forEach((item,index)=>{
    console.log(index);
    console.log(item);
    
    console.log(`${index}=${item}`);
    
    
})

//map //same as foreach and also we can genrate new array

const mapretArray=looping.map((item,index)=>{
    console.log(index);
    console.log(item);

    return item*4
    
})
console.log(mapretArray);

//example

const returnArray=looping.map((item)=>{
    if(item >= 400){
        return item
    }
    return null;

})
console.log(returnArray);

//Filter

const filterRetArr=looping.filter(i=>i<400)
console.log(filterRetArr);


//for of

let arrayName = [1,2,3,4,5]
for(let number of arrayName){
    console.log(number);
    if(number>=3){
        console.log(number);
        
    }
}


//object & json iteration json -> foreach and map

let bike={
    name:"Duke 390",
    speed:175,
    brand:"ktm"
}

console.log(bike);
console.log(bike.name);

console.log(Object.keys(bike));
console.log(Object.values(bike));


//object iteration

for(let key in bike){
    console.log(key);
    console.log(`${key} = ${bike[key]}`);
    
    
}

const bikeBrands =[
    {
        name:"Duke 390",
        speed:175,
        brand:"ktm"
    },
    {
        name:"Dominor 400",
        speed:170,
        brand:"Bajaj"
        
    },
    {
        name:"R3",
        speed:199,
        brand:"Yamaha"
    },
    {
        name:"Aprila 457",
        speed:202,
        brand:"Aprila"
    },
    {
        name:"ZX4r",
        speed:204,
        brand:"kawasaki"
    }
]

bikeBrands.forEach((item)=>{
    console.log(item.name);
    console.log(item.speed);
    console.log(item.brand); 

})


let result = bikeBrands.map((item)=>{
    if(item.speed > 180){
        return item;
    }
    return null;

}).filter(item => item !== null)//filter method 


console.log(result);
