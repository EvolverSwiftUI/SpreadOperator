// spread operator with array
let arr1 = [2,3];
let arr2 = [1,...arr1,3,4];
console.log(arr2);

// copy
let arr3 = [...arr1];
console.log(arr3);

// two arrays concatenation
let arr4 = [...arr1, ...arr2];
console.log(arr4);

// spread operator with object
let person = {name: "Siva", age: 30};
let personDetails = {...person};
console.log(personDetails);

let personDetails2 = {...person, city: "Hyderabad"};
console.log(personDetails2);

// objects concatenation using spread operator
let address = {city: "Hyderabad", pincode: 500001};
let personDetails3 = {...person, ...address};
console.log(personDetails3);

// spread operator with function calls
function add(a,b,c) {
    return a + b + c;
}
let numbers = [1,2,3];
console.log(add(...numbers));

// extra values in array are ignored while passing to func
let numbers2 = [1,2,3,4,5];
console.log(add(...numbers2));

// Summary:
/*
Arrays:
    1. creating a copy
    2. concatenation
Objects:
    1. creating a copy
    2. concatenation
Function Calls     
*/

// ------------------------------------
// rest operator

function numbersFunc(...args) {
    console.log(args);
}

numbersFunc(1,2,3);
numbersFunc(1,2,3,4,5,6,7,8);

function numbersFunc2(a,b,...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

numbersFunc2(1,2,3,4,5,6,7,8);

function sum(...args) {
    let result = 0;
    for( let arg of args) {
        result = result + arg;
    }
    console.log(result);
}

sum(1,2,3);
sum(1,2,3,4,5,6,7,8,9,10);

// Destructuring Arrays and Objects 
// with rest parameter syntax

// Apply on Array
let [a,b,c] = [1,2,3];
console.log(a);
console.log(b);
console.log(c);

let [d,e,...rest] = [1,2,3,4,5,6];
console.log(d);
console.log(e);
console.log(rest);

// Destructuring on Object
let {firstName, ...rest1} = {
    firstName: "Sivaram",
    lastName: "Yadav",
    age: 30
};

console.log(firstName);
console.log(rest1);

// Default Parameters

function numbersFunc3(a=2, b=4) {
    console.log(a);
    console.log(b);
}
// if we don't pass
// it will take default values
numbersFunc3();

// if we pass it will take the
// passed params
numbersFunc3(9,10);
numbersFunc3(1);

// Template Literals (Template Strings)
/* 
    template literals are enclosed by backticks.
    syntax:
    `some text ${expression} some text`

    They are used to:
    1. Embed variables or expressions in the string
    2. Write multi-line strings
*/

let nameStr = "Sivaram";
console.log(`My name is ${nameStr}`);

let result = `The sum of 4 and 5 is ${4 + 5}`;
console.log(result);

let person2 = {name: "Sivaram"};
console.log(`My name is ${person2.name}`);

// Multi-line string
let greet = `Hello, how are you doing Mr. ${person2.name}
and I hope every one doing well at the other side.
That's what makes us so happy and joyful.
`
console.log(greet);

// Summary:
/*
1. Spread Operator
    1.1. Arrays
    1.2. Objects
    1.3. Function calls
2. Rest Parameter
    2.1. Destructing Arrays and Objects
3. Functions
    3.1. Default parameters
4. Template Literals or String Literals            
*/
