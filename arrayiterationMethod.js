const numbers = [45,4,5,9,16,25]; //9

//using simple loop
let num = [];
for(let i=0 ; i < numbers.length ; i++){
    if(numbers[i] != 9){
        num.push(numbers[i])
    }
    }
    console.log(num);

   //using forEach() array itration method // break and contiue keyword we cannot apply with forEach
let num2 = []
    numbers.forEach(item => {
        if (item !=9){
            num2.push(item)
        }
    })
    console.log(num2);

    //break/continue
     num = [];
for(let i=0 ; i < numbers.length ; i++){
    num.push(numbers[i]);
    if(numbers[i] == 16){
     break; // break out looping
       }
    //    num.push(numbers[i]);
    }
    console.log(num);

    for(let i=1 ; i<=50 ;i++){
        if(i >= 31 && i <=40 ){
            console.log(i);
        }
    }

    let item = [1,2,3,4,5,6,7,8,9,10];
    item.forEach(ele=>{
        if(ele >=3 && ele <=9){
            document.write(ele,'\n');
        }
})

item.push(44);
document.write(item)

item.pop(44);
document.write(item)

// const n = [1,2,3,4,5,6,7,8,9,10];
// n = [20,44]
// console.log(n);


//find() it will retrun fist match that passess your test conditon
let no = item.find(item=>{
  return item > 7;
})
console.log(no);//8

//indexOf() : case sensitve // will return -1 if no match found
const fruits = ["Apple","Orange","Apple","Mango","Orange"];
console.log(fruits.indexOf("Orange"));//1
console.log(fruits.indexOf("orange"));//case sensitive  // will return -1 if no match found

//lastIndexOf():case sensitve // will return -1 if no match found
console.log(fruits.lastIndexOf("Orange"));

//map():
emp = [
    {
        empName: "chetna", city: "pune",age:30
    },
    {
        empName: "Harshali", city: "satara",age:40
    },
    {
        empName: "Om", city: "Nashik",age:25
    }
]
let names = emp.map(empData=>{
    return empData.empName;
})
console.log(names);

// let nameObj = emp.map(({empName,city})=>((empName,city)))
// console.log(nameObj);

let nameObj = emp.map(({empName})=>((empName)))
 console.log(nameObj);

 let char = [50,55,44,11,44,22,33,44,77];
 //objects are used for stroing keyed collections.
 //arrays ar used for storing ordered colledctions.

 const array = [10,20,30,20,40,20,50,88,20];
 const searchElement = 20;
 let foundIndex=[];

 array.forEach((element, index) =>{
    if (element === searchElement){
        foundIndex.push(index);
    }
 });
 console.log(foundIndex); //output: 2

 //includes()//true/false

 const array1 = [10,20,30,20,40,20,50,88,20];
 console.log(array1.includes(40));//true

 const array2 = [10,20,30,20,40,20,50,88,20];
 console.log(array2.includes(40)); //false

 //remove item using set()
 let char1 = ['a','b','a','d','f','b'];
 let char2= new Set(char1);
// let char2= [...new Set(char1)];
 console.log(char2);

 //filter()
 let data = char1.filter((item,index) => {
    if(char1.indexOf(item) === index){
        return item
    }
 })
 console.log(data);

//using includes()
let uniqueEle = [];
char1.forEach((ele,i)=>{
if(!uniqueEle.includes(ele)){
    uniqueEle.push(ele)
}
})
console.log(uniqueEle);





