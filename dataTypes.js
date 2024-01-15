console.log('kjflsjf');//Run kas karych tya sathi ex.
//Run karnay sathi methode 1 : dataType.js and dataType.html ki do files banahe link link karyach script tag use karu dataType.html made
//ex: 
//JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date

let state =""; //empty string

let city ="pune"; //string data type

console.log('city 1' ,city);

city ='mumbai' //or we can write this type also
console.log('city 2',city);

var marks = 90; //number
console.log('m>>>',marks);

// var mobolieno = 938403857;
// console.log(mobolieno);
var mobolieno = "938403857";
console.log(mobolieno);

var isFavFruit = true; //boolease true/false
console.log(isFavFruit);

var isFavFruit ='false'; 
console.log(isFavFruit);

//typeOf()>it gives type of variable
console.log('data type of isfavFruit var',typeof(isFavFruit));

const match = undefined;
console.log(match);

let abc ;
console.log(abc);
console.log(typeof(abc));

var myName = null;
console.log(myName);
console.log(typeof(myName)); //null/array value typeof will return >> object

// let a = 999999999999999;
// console.log(a);

// let a = 9999999999999999;
// console.log(a);

// let c = "99999999999999999";
// console.log(BigInt(c));

let d = 999999999999999n
console.log(d);

//array
let name = "pooja , poonam"
console.log(name);

let cities = [];
cities = ['pune' , 'mumbai', 'nashik','satara','kolapur'];//homoginous array
console.log(cities)
console.log(typeof(cities)); //array data type is always object
console.log(cities[1]);//mumbai
console.log(cities[4]);//kolapur
console.log(cities[5]);//undefined
console.log(cities.length);
console.log(cities[0]);
console.log(cities[cities.length-1]);
console.log(typeof('data type citye',cities));

//heterogenous array
let hetroArray = ['harshali',505550,test(),true,null,undefined,'pooja'];
console.log(hetroArray[2]);

function test(){
    return 'chetna'
}

//let cars = {}  //object >> (key:value)
let cars = {
    carName : "seift",
    carPrice : 800000,
    carColor : "white",
}
console.log(cars.carName);
console.log(cars.carColor);
