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

