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