import React from "react";

const ScopeVariables = () => {

/* 1. Var variables */
/* scope variable  */

var applePrize = 100; // var-keyword => global variable 
const checkValue = () => {
  var applePrizefortwokg = applePrize * 2
  return applePrizefortwokg;
}
// var-keyword => local variable 
const checkValueLocal = () => {
  var applePrize1 = 100;
  var applePrizefortwokg = applePrize1 * 10;
  return applePrizefortwokg;
}

/* Redeclaration and Reasaignment */
 var number = 60;
 console.log("number value is :", number);

 var number = 100; // this is redeclare
 console.log("number value", number);

 var square = 81;

 square = 45; // reassign value

 square = 144; // reassign value

 // how to hoist variable declare with var

 console.log("Name", name); // for global scope

 var name = "Komal";

 console.log("Name", name);


 const printValue = () => { // for local scope
    var square = number * number; // before declare value
    // return square;
    console.log("square", square);
  
    var number = 40;

    var square2 = number * number; // after declare value
    console.log("square2", square2);
    return square2;
 }
 printValue();


 /* 2. let variables */
/* scope variable  */

let rate = 10; // global scope

const checkScoping = () => {

   let doublerate = 20; // local scope 

   if(rate < 80){
    let newrate = 120; // block scope
    var newlargerate = 200;
   }
  // console.log("new rate", newrate); // throw error -bcz for newrate is block scope
   console.log("new large rate", newlargerate);
}
checkScoping();

/* Redeclaration and Reasaignment */
 
let numberlet = 11; // let var reassign but cannot redeclare.
 numberlet = 111;
// let numberlet = 88; // SyntaxError: Identifier 'numberlet' has already been declared
console.log("number let", numberlet);
console.log("number let 2", numberlet);


/* how to hoist with let */

// console.log("value", value); // for global scope

// let value = 80; // ReferenceError: Cannot access 'value' before initialization

const checkValuelet = () => {
 // let square = num * num;

  let num = 5; // ReferenceError: Cannot access 'num' before initialization
 // console.log("seq", square); 
}
checkValuelet()

/* 3. const variables */
/* scope variable  */
const integer = 66; // global
const check = () => {
  const bigInt = 77; // local
  if(bigInt > 90){
    const tempVal = 55; // block 
  }
 // console.log("val", tempVal); // ReferenceError: anotherLargerNumber is not defined
  console.log("val2", bigInt);
}
check();
console.log("val2", integer)
/* Redeclaration and Reasaignment */
const a = 90;
// const a; // Identifier 'a' has already been declared.
 // a = 70; //TypeError: Assignment to constant variable.. 


/* how to hoist with let */
// console.log(number1)
// ReferenceError: Cannot access 'number' before initialization

const number1 = 50
 
return(
    <>
    <h2>var - Variable keyword</h2>
    <h4>Scope Variables</h4>
    <div>1 Kg Apple : {applePrize} Rs.</div>
    <div>2 kg Apple : {checkValue()} Rs.</div>
    <div>10 kg Apple : {checkValueLocal()} Rs.</div>

    <h4>Redeclaration and Reasaignment Variables</h4>
    <div>Number : {number}</div>
    <div>Square of 12 : {square}</div>

    <h4>Hoisting - Var</h4>
    <div>Value : {printValue()}</div>
    </>
)
}
export default ScopeVariables;