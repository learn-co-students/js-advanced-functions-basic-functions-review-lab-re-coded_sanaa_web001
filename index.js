// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(a="*") {
  return function(adjective="special") {
    return `You are ${a}${adjective}${a}!`
  }
}

let Calculator = {
  add: function (a,b) {
    return a + b;
  },
  subtract: function (a,b) {
    return a - b;
  },
  multiply: function (a,b) {
    return a * b;
  },
  divide: function (a,b) {
    return a / b;
  }
}


let actionApplyer = function(start, x) {
  let a = start

  for (let i = 0; i < x.length; i++ ){
    a = x[i](a)
  }
  return a
}
