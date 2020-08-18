function saturdayFun(par="roller-skate"){
return "This Saturday, I want to "+par+"!";
}
function mondayWork(par="go to the office"){
return "This Monday, I will "+par+".";
}

function wrapAdjective(flair="*"){
  return function(par='special'){
    return `You are ${flair}${par}${flair}!`
  }
}
let encouragingPromptFunction = wrapAdjective("!!!");

let Calculator={
  add:function(a,b){
    return a+b;
  },
  subtract:function(a,b){
    return a-b;
  },
  multiply:function(a,b){
    return a*b;
  },
  divide:function(a,b){
    return a/b;
  },
  
}
function actionApplyer (arg1,arr){
  let ret=arg1
for(let i=0; i<arr.length;i++) {
ret= arr[i](ret)
 
}
  return ret;
}