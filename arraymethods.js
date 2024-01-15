let city = ['pune','nashik','Amravati','jalna',20000]; //heterogenous array
console.log(city.length);//lenth operator will return length of an array

//toString()method:
console.log(city.toString());

//pop()method: pos out/detlet last item from array and will return the same
let popedOutItem = city.pop();
console.log(popedOutItem);
console.log(city);

//push() to append/add items at the end of the array, will return added items, will return length of the original array
let returndByPush = city.push(6000,'chetna');
console.log(city);
city.push(6000,'chetna');

//shift()methods:the shift method removes the first array element and “shifts” all other elements to a lower index.
let color = ['red','blue','black','yellow','green']
let shifrReturndData = color.shift();
console.log(shifrReturndData);
console.log(color);

//unshift()method:
let color1 = ['pnik','red','blue','black','yellow','green']
let  returnedData = color1.unshift('black','yellow');
console.log(returnedData);
console.log(color1);

//join()method:
let v = ['pink','red','blue','black','yellow','green']
let v1 = v.join(' * ');
console.log(v1);

let name = ["chetna","chure"];
console.log(name);
let fName = name.join(" ");
console.log(fName);

let date = ["o4","05","1998"];
console.log(date);
// let BirthDate = date.join(" ");
let BirthDate = date.join(" /");
console.log(BirthDate);

//concat()method:
cl2 = ['black','yellow'];
cl3 =['pink','red','blue'];
let cl4 = cl3.concat(cl2,v,"white");
console.log(cl4);

//delete
const fruits = ["Bananna","Orange","Apple","Mango"];
delete fruits[1];
console.log(fruits);
console.log(fruits.length); //lenth reamins same after deleting items.

//delete: undefined holes
//length remains same after deleting itmes
const fruits1 = ["Bananna","Orange","Apple","Mango"];
delete fruits1[0];
// delete fruits1[10];
console.log('>>>',fruits1);

//splice(index(where u want to add item),count(how many elements want to delete,elements to be added))
const fruits2 = ["Bananna","Orange","Apple","Mango"];
// let a = fruits2.splice(1,0,'kiwi',);
fruits2.splice(1,2,'kiwi');
console.log(fruits2);

const fruits3 = ["Bananna","Orange","Apple","Mango","kiwi"];
let a = fruits3.slice(2,4);
console.log(a);
console.log(fruits3)

//number method:
let no = 789549;
let no1 = no.toString();
console.log(no1);

//toFixed()
let weigth = 4.5674805;
let w2 = weigth.toFixed();
console.log(w2);

//valueOf()
let r =54668;
console.log(r.valueOf());




