//The javascript spread operator (...) allows us to
// quickly copy all or part of an existing array or object into another array or object.

let num = [40,50,60,40,8,70];
// let num2 = [];

// num.forEach(ele=>{
//     num2.push(ele);
// })
// console.log(num2);

let num2 = [...num];
console.log(num2);

//part elemt copy
let [item1, item2, ...item3] = num ;
//item1=40, item2=50, item3=60,40,8,70
console.log(item1);
console.log(item2);
console.log(item3);



//concatination of array
let color1 = ['red','orange'];
let color2 = ['violet','black'];

let color = [...color2, ...color1];
console.log(color);


//object:
let emp = {
    name: "chetna",
    age: "25",
    city:"pune"
};

let emp3 = {...emp};
console.log(emp3);

//object:
let emp1 = {
    name: "sumit",
    age: "25",
    city:"pune",
    mob:94025475
};


let emp2 = {
    name: "pooja",
    age: "25",
    city:"pune",
    sal:30000
};

let emp4 = {...emp1, ...emp2};//use spread operator if keys are diffrent in both the object,
console.log(emp4);// do not use spread for object

//object.assign(target, ...sources);
const mergeobj = Object.assign({},emp1,emp2);
console.log("mergeobj",mergeobj);

//ternory oprator
let marks =50;
if(marks > 35){
    console.log('pass');
}
else{
    console.log('fail');
}

//conditon ? true>>statment1 : false>>statement2
marks > 35 ? console.log('pass') : console.log('fail');

//arrow funciton:Allow us to write shorter function syntax;
 function test(){
    return 20*8;

}
console.log(test());
// ()=> 20*8;

test1 = ()=> 20*8;
console.log(test1());

