//for loop
//for in loop
//for of loop
//do while loop

//for loop

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// console.log("7");
// console.log("8");
// console.log("9");

// for(let a = 1 ; a <=1000 ; a++){
//     console.log(a);
// }

// for(;;){
//     console.log('chetna');  //it will go in infinit loop 
// }

let student = {
    name:'chetna',
    age: 20,
    city:'pune'
}
//for in loop - it is used to itrate object (ES1 version's feature)
for(let x in student){
    console.log(student[x]); //[]property access symbol [x]
}

//for of loop
let color = ['red','orange','blue','purple','pink'];
for(let items of color){
    console.log(items);
}

//do while
let no = 0;
let a=0;
do{
    console.log(a);
    a++
}
while(a<=5){
   console.log(a); 
}