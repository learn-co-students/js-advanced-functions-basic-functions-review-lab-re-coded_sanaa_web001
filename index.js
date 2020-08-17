// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}
// const mondayWork=function(activity="go to the office"){
//   return `This Monday, I will ${activity}`;
// }
let mondayWork =function (activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(visualFlair='*'){
    return function(param='special'){
        return (`You are ${visualFlair}${param}${visualFlair}!`)
   }
 }
 let Calculator = {
   add: function (x, y) {
     return x + y;
   },
   subtract: function (x, y) {
     return x - y;
   },
   multiply: function (x, y) {
     return x * y;
   },
   divide: function (x, y) {
     return x / y;
   },
 };
 function actionApplyer(number, array){
     if (array.length === 0) {
         return number;
     } else {
         let currentNumber = number;
         for (let i = 0; i < array.length; i++){
             currentNumber = array[i](currentNumber);
         }
         return currentNumber;
     }
 }
