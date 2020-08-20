// Your code here

function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!` ;
}
saturdayFun();
saturdayFun('bathe my dog');

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.` ;
}
mondayWork();
mondayWork("go to the office");

function wrapAdjective(visualflair="*"){
    
    return function(x="special"){
        return`You are ${visualflair}${x}${visualflair}!`;
    }
    
    
}
wrapAdjective("%")("a dedicated programmer");
const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
}

let actionApplyer = function(start, array) {
  let x = start

  for (let i = 0; i < array.length; i++ ){
    x = array[i](x)
  }

  return x
}