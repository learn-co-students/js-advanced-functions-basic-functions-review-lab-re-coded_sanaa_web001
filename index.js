// Your code here
function saturdayFun(act="roller-skate") {
  return `This Saturday, I want to ${act}!`;
  }

function mondayWork(act="go to the office") {
    return `This Monday, I will ${act}.`;
}

 function wrapAdjective(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`;
    }
  }
  
  var Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b;
    },
    multiply: function(a,b) {
      return a * b;
    },
    divide: function(a,b) {
      return a / b;
    }
  }
  
 function actionApplyer(start, ray) {
    let a = start;
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a);
    }
  
    return a;
  }