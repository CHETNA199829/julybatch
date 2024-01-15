//let/var/const vn = value

//default var keyword

//scope level diff:
//let:block level scope, var : function level scope

function test(){
    let a = 10;
    if(a < 20){
let b = 30;
var c = 60;
const d =70;
    }
console.log(b);
console.log(c);
console.log(d);
}
console.log('z,',z); //for gloobal scop
console.log(text());


//declaration:
//redeclaration is not possible with let,const keyword
//redeclaration is possible with var keyword

// let city = 'pune';
// let city = "mumbai";

var city = 'Pune';
var city = 'mumbai';

// const city = 'pune';
// const city = "mumbai";

// reassigment:
//reassigment value to the varibale is possible with let, var keyword but
//not possible with const keyword

let marks = 50;
marks = 60;

const s = 87;
s = 77

//hoisting :Means first define value to the variable then declare it;
//Hoisting is possible using var keyword not possible with const, let keyword

p = 50;
// let p;
//const p;
var p;

//defining value at a time of declaration is muslt const keyword

let f;
f = 40;

var r;
r = 65;

// const y;
// y = 90;

const y = 90;

// function : paramerterised, parameterless
//use: to implement logic
function multiplication(){
    //code block
    console.log('parameterless fun');
    let a = 20;
    let b= 30;
    res = a * b;
    console.log('res',res);
}

//argument/parameter
function division(a,b){
    res = a / b;
console.log('parameterise fun',res);

}