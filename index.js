// Your code here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}

let wrapAdjective = function(string = '*') {
    return function(adjective = 'special') {
        return `You are ${string}${adjective}${string}!`;
    }
};

const Calculator = {
    add: function() {
        return 1 + 3;
    },
    subtract: function() {
        return 1 - 3;
    },
    multiply: function() {
        return 1 * 3;
    },
    divide: function() {
        return 10 / 5;
    }
};

function actionApplyer(startingPoint, array) {
  
  let result = startingPoint;

  for (const i in array){
    result = array[i](result);
  }

  return result;
}