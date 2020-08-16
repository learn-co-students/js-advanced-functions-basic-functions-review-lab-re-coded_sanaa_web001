// Your code here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

// defines mondayWork function expression
function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.` ;
}
mondayWork();
mondayWork("work from home");

//defines wrapAdjective function
function wrapAdjective(wraps = "*") {
  return function result(emphatic = "a hard worker") {
    return `You are ${wraps}${emphatic}${wraps}!`;
  }
}

// let result = wrapAdjective();
// let emphatic = result("a hard worker");
let result = wrapAdjective("||");
let emphatic = result("a dedicated programmer");

// defines an object called Calculator
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

Calculator.add(1, 3);
Calculator.subtract(1, 3);
Calculator.multiply(1, 3);
Calculator.divide(10, 5);


const actionApplyer = (base, array) =>
  array.reduce((accumulatedOutput, fun) => fun(accumulatedOutput), base);
  
console.log(actionApplyer(0, []));
let arrayOfTransforms = [
  function (a) {
    return a * 2;
  },
  function (a) {
    return a + 1000;
  },
  function (a) {
    return a % 7;
  },
];
actionApplyer(13, arrayOfTransforms);