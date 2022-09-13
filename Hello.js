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
console.log("global context");