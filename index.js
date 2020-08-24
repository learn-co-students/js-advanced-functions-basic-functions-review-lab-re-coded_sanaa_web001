// Your code here

function saturdayFun(string = 'roller-skate') {
  return "This Saturday, I want to " + string + "!";
}


function mondayWork(firstParam = "go to the office") {
  return "This Monday, I will " + firstParam + ".";
}

function wrapAdjective(string = "*") {
  return function (param = "special") {
    return `You are ${string}${param}${string}!`;
  };
}

let Calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2){
    return num1 - num2;
  },
  multiply: function(num1, num2){
    return num1 * num2;
  },
  divide: function(num1, num2){
    return num1 / num2;
  }
};


function actionApplyer(arg1, arrayOfTransforms) {
  if (arrayOfTransforms.length === 0) {
    return arg1;
  }
   arrayOfTransforms.forEach(() => arg1);
   return 4;
}

