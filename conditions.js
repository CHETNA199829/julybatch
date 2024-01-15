//if codition, if else, else if, switch

let items = 50;

// if(){ code block}

//items greater thaln or equal to 50 then if(items >= 50){
if(items > 50){
console.log("stock available");
}

//if else

if(items >= 50){
    console.log("stock is available");
}
else{
    console.log("limited stock available");
}

//else if : multiple condtion

if(items >= 50){
    console.log("stock is availavle");
}
else if( items >= 20){
    console.log("few items left");
}
else if( items >= 1){
    console.log("harry up few stock availble");
}
else{
    console.log("out of stock");
}

// document.write('<br>','<br>');
// let marks = 50;
// switch (marks) {
//     case  50:
//         document.write('pass');
//          //break;

//          case 60: 
//          document.write('second class');
//           //break; // if we do not write break it will cotinue excute all the cases  

//          case 75: 
//          document.write('first class'); 
//          //break;  
         
//          case  80: 
//          document.write('distintion'); 
//          break;   

//     default:
//         document.write('fail')
//         break;
// }

document.write('<br>','<br>');
let palyerName = "sachin tendualkar";
switch (palyerName) {
    case "sachin tendualkar":
        document.write('cricket player');
         //break;

         case "virat kohali": 
         document.write('cricket player');
          //break; // if we do not write break it will cotinue excute all the cases  

         case "saniya": 
         document.write('tennis player'); 
         //break;  
         
         case  "messi": 
         document.write('football player'); 
         break;   

    default:
        document.write('match not found')
        break;
}