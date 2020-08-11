// Your code here
function saturdayFun(a="roller-skate"){
  return "This Saturday, I want to "+a+"!";
}

var mondayWork=function(a="go to the office"){
  return "This Monday, I will "+a+".";
}

function wrapAdjective(b="*"){
  return function(a="special"){
    
    return "You are "+b+a+b+"!";
  }
}
let Calculator={
  divide:(function(){ return 10/ 5 }),
  multiply:(function(){ return 1*3 }),
  subtract:(function(){ return 1-3 }),
  add:(function(){ return 1+3 })
}
let arra = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]
function actionApplyer(a,arr=[function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }]){
  if(arr.length<1){
  return a;}
  else{
    for(let i=0;i<arr.length;i++){
      a= arr[i](a);
    }
    return a
    }
  }
