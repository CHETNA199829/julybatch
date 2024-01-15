let text ="I live in Mumbai , we like mumbai";

let textLength = text.length;
console.log(textLength);

let slicedText = text.slice(3,4); //start index : inclusive, end index : exclusive
console.log(slicedText);
console.log(text.slice(10,16));
console.log(text.slice(5));
console.log(text.slice(-13,-5));//start index : exclusive, end index : inclusive

console.log(text.substring(-1,10)); //

console.log(text.substr(2,6)); //start inde, lenght

console.log(text.replace('mumbai','Pune')); //replace will place first finder value
console.log(text.replace('jdljfl ','Pune')); //original string: replace is case sensitive

console.log(text.replace(/mumbai/i,'Pune'));
console.log(text.replace(/mumbai/ig,'Pune'));

console.log(text.replaceAll('mumbai','nashik'));
console.log(text.replaceAll(/mumbai/ig,'nashik'));

console.log(text.replaceAll("I live in Mumbai , we like mumbai", 'chetna' ));

console.log(text.toUpperCase()); // all data get converted into upper case.
console.log(text.toLowerCase()); //all data get converted into lower case.

//concat()

let firstName = 'chetna';
let lastName = 'chure';
// let fullName = firstName + " " + lastName;
let fullName = firstName.concat('',lastName,'', 4000)
console.log(fullName);

console.log('low',text.toUpperCase(),'upp', text.toLowerCase());

// Tring method : Removes  whitespace from both sides of a string; whitespace means extra spaces.
let data = ' kjdljljf        ';
console.log(data.trim());

var string = "    This  should  become  something       else   too  .  ";
// stringData = string.replace(/\s+/g," ");
stringData = string.trim().replace(/\s+/g," ");
console.log(stringData);

let mum = 637434739;
let datal = mum.toString();
console.log(datal);

let text1 = 'HELLO WORLD';
let char = text.charAt(0);
console.log(char);
let d = text1.charAt(20);
console.log(text1.charAt(20));
console.log(d);// it will retun empty

//split
let date = 200000;
let g = data.toString();
let newDate = g.split('-') //it is unndefine because here is - not found.
// let date = "04-05-1995";
// let newDate = date.split('-') //it splits out data nd will return array.
console.log(newDate[2]);

let num2 = "394305";
let m = parseInt(num2);
console.log(m);

let text4 = " djfls lsdjfjsdl djfldsj ldjflds jfldsjf lfjl";
t5 = text4.split(" ");
console.log(t5);

let add = "afds afkk sjslj chetan djfldj"
console.log(add.includes("chetan")); // include method retuns ture if value is include in data. other wise it will retun false

// {"status":"success",
// "statusCode":"12333",
// "message:"data submited successfully"}

let statusCode ="1233333";
let a = statusCode.startsWith("123");
console.log(a);
console.log(statusCode.endsWith("3")) ;

let text5 = "Hellow workd, welcome to the universe.";
// let result = text5.indexOf("welcome");// it should return first match of index
let result = text5.indexOf("fjdsljf");// it should retun -1
console.log(result);
console.log(text5.lastIndexOf("to"));

let text6 = "Mr Blue has a blue house";
// let position = text6.search("blue");
let position = text6.search(/blue/i); // we can add regex patteren
console.log(position);// difference between searvh and indexOf method : we cannot pass reg ex pattern to indexOf 

//The search() method returns the postion of the first match.
// The match() method retuns an array of matches.

//The search() method cannot take a start positon argument.
// the indexOf() mehtod cannot search against a reglar exression.

// match ex:
let text7 = "The rain in SPAIN stays mainly in the plain";

let b = text7.match("ain");
console.log(b);
console.log(text7.match(/ain/g));