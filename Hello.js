var a=10;
console.log(a);
var b=10.6;
console.log(b);
console.log(typeof a);
console.log(typeof b);
console.log(typeof null);
console.log(typeof infinity);
console.log(typeof NaN);
var max=Number.MAX_VALUE;
console.log(max);
var name="Manoj";
console.log(typeof name);
var x;
var y=null;
// operator in Java Script
console.log('1'+1);
var a=1;
do{
  console.log(a);

}
while(a>1);
for(var k=0;k<10;k++){
  console.log('Manoj Singh ');
}

// simple function
function show1(){
  alert("hello function 1");
  console.log("simple fuction");
}
show1();

//Parametrized Function
function show2(msg){
  alert(msg);
  console.log("Hello Parameterized");
}
show2("Hello parameterized function");


 // JavaScript Hoisting
console.log(m);
var m=10;
console.log(hello());
function hello(){
  return "hello world";
}
console.log(helo());
console.log(il);
var i=10;
function helo(){
  return 'hello';
}
// it work like a stack last in first out
function c(){
  console.log("this is c");
}
function b(){
  c();
  console.log("this is b");
}
function a(){
  b();
  console.log("this is a");
}
a();
<<<<<<< HEAD
console.log("global context");

// Nested Function
function outer(){
  var out=10;
  function inner(){
    console.log(out);
  }
  inner();
} 
// inner() in not accesible in out side of outer()
outer();

// Function Expression
var factorial=function fact(n){
  var facts=1;
  for(var i=1;i<=n;i++){
    facts=facts*i;
  }
  return facts;
}
// Now we use factorial as a function
console.log(factorial(5));
//if we use variable then it show only data which we declare in the variable
/* console.log(factorial) output is:-
  f fact(n){
  var facts=1;
  for(var i=1;i<=n;i++){
    facts=facts*i;
  }
  return facts;
}*/

// annonums function
var facts=function (n){
  var fact=1;
  for(var i=1;i<=n;i++){
    fact=fact*i;
  }
  return fact;
}
console.log(facts(4));



// funciton as a parameter

var fact=function (n){
  var f=1;
  for(var i=1;i<=n;i++){
    f=f*i;
  }
  return f;
};

function ncr(n,r,fact){
  return fact(n)/(fact(r)*fact(n-r));
}
console.log(ncr(5,2,fact));


// Arrays
// Array in JavaScript
var arr=[1,2,3,4,5,6];
var ar=new Array(1,2,3,4,5,6,7,8,9);
console.log(arr);
console.log(arr);
console.log(arr[5]);
arr[12]=23;
arr[2]=8;
console.log(arr.length);
//Declartion of array
var a=new Array(); // empty array
var a=new Array(2) // with size of 2 array
var a=new Array(2,3,4) // if we pass more then 1 value in Array() so these are the element of array

// function on arrays
arr.push(10);
arr.pop();
//splice(start index,delete node,element be insertd)
arr.splice(1,0,0);
// in java script we can store a multiple type of value in single array
var arr=["manoj",10,true,'a']
// using for loop
for(var i=0;i<arr.length;i++){
  console.log(arr[i]);
}
// using for loop
function print(el){
  console.log(el);
}
arr.forEach(print);

// OBJECT IN JAVAS
// first option for object
var std={
  name:'Manoj',
  age:22,
  marks:95
}
// To read the value of object

console.log(std.name);
// it is used when we dont have valid name of key in object
console.log(std["name"]);
// To change the value of object
std.age=20;
console.log(std.age);
// To add new value in object
std.branch="CSE"
console.log(std)

//DIFFRENT METHOD TO CREATE OBJECT
// 1. Using empty object and add value
var std={};
std.name="manoj";
std.age=49;
std.marks=80;
console.log(std);
// 2. Using new keyword
var st=new Object();
st.name="hello";
st.age=90;
console.log(st);

// delete the property of object 
delete st.age;
delete std["age"];
console.log(st);
console.log(std);

//Nested Object
var std={
  name:"manoj",
  age:49,
  marks:80,
    address:{
      city:"CPT",
      pincode:262523
  }
  }
  console.log(std);
  // Accessing nested object
console.log(std.address);
// acceessing nested object properties
console.log(std.address["city"]);
console.log(std.address.pincode);
  

// Timing Events in JavaScript
var count=0;
function sayHello(){
  console.log("Hello");
  count++;
  if(count==5){
    // to stop the inerval fucntion and it need a id of setInterval instance 
    clearInterval(id);
  }
  
}
setTimeout(sayHello,1000); // execute only once after given time
 var id=setInterval(sayHello,1000); // execute itrtivly after given time


 //countdown timer
var c=10;
function countdown(){
  if(c<1){
    console.log("Time Up");
    clearInterval(id);
    return;
  }
  console.log(c);
  c--;
}
var id=setInterval(countdown,1000);