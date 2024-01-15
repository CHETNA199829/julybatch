//= >>assigment operator --- to assign value to the variable
//== >>Equality operator ---to compare value of two variable
//=== >>Equality operator ---it will copare value as  well as data type

let a = 40;  //assigment opertors e.g.

// let b = "40"
let b = "30"

console.log(a == b);
console.log(a === b);//it will stictly chek value and data type.

let c = 20;
var d = 30;
 
console.log(a != b); //true//not operator !true >> false; false >> true
// != means not equal to
console.log( a == b); //false

let isFav = true;
console.log(isFav); //false

let e = 40;
// let f = 50;
let f = "50";

console.log(">", e > f); //false // it will check only for values
console.log("<", e < f); //true

console.log("<=", e <= f); //true// less than equal to operator

//&& AND : T && T ---> T, else F

console.log( e < f && f > e); // true

// || OR : F || F --> F, else T

console.log( e < f || f == e); // true
console.log( e < f || f == e && a != b); // true
console.log( a !== b); //true //  It will check value as well as data type.

let x = 20;
    let y = 30;
    let res = x + y;
    console.log(res);
    


