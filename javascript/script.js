//console.log("Hello World!!");
//var can be reinitialize and redeclare
/*var a; //Global scope
a=10;
var a;
a=20;
//reinitialiae
let b=10; //Block scope
b=20;
//can't reinitialize and redeclare
const c=30; //Block scope
console.log(a);
console.log(b);
console.log(c);
*/
//Datatypes
/*
var num=10;
var str="Sumedha"; //no char only strings('' "" ``)
var bool=true;
var un;
var n=null;
var sym=Symbol('li');
var big=12348327498632n;

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof un);
console.log(typeof n);
console.log(typeof sym);
console.log(typeof big);

var arr=[1,2,3,4,5]
console.log(arr);
console.log(typeof arr);

var Obj={
    name:"Sumedha",
    dept:"DS"
}
console.log(Obj);
console.log(typeof Obj);*/

/*var a=10;
var b=20;
console.log(a+b);
console.log(a-b);

var a=10;
var b="2";
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

var a=10;
var b=20;
console.log(a=b);
console.log(a==b);
console.log(a!=b);
console.log(a!==b);
console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);*/

/*var a=true;
var b=false;
console.log(a&&b);
console.log(a||b);
console.log(!a);
console.log(!b);*/

//promise
/*const promise = new Promise((resolve,reject)=>{
    var success=true;
    if(success){
        resolve("Task completed");
    }
    else{
        reject("Task not completed");
    }
})
promise.then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.log(err);
})
*/

//setTimeout
/*const promise = new Promise((resolve,reject)=>{
    var success=true;
    if(success){
        setTimeout(()=>
        {
            resolve("Task completed");
        },2000);
        
    }
    else{
        reject("Task not completed");
    }
})
promise.then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.log(err);
})
*/

//setInterval
/*var count=1;
const IntervalCount = setInterval(()=>{
    console.log(count);
    count++;
    if(count>5){
        clearInterval(IntervalCount);
    }
},2000);*/

//fetch
/*const getData=()=>{
    return fetch("https://jsonplaceholder.typicode.com/users")
}
getData().then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err));*/

//async and await
const getData=async()=>{
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await res.json();
        console.log(data);
    }catch(err){
        console.log(err)
    }
}
getData();