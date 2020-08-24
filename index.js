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


let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }

