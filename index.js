function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(x="go to the office"){
  return `This Monday, I will ${x}.`;
}
function wrapAdjective(z="*"){
  return function innerfun(y="special"){
    return `You are ${z}${y}${z}!`;
  }
}

const Calculator = {
  add : function (){ return 1+3;},
  subtract : function (){ return 1-3;},
  multiply : function (){ return 1*3;},
  divide : function (){ return 10/5;}
}

let arrayOfFuncs = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]
function actionApplyer(x,arrayOfFuncs){
  if(arrayOfFuncs.length===0){
    return x;
  }
  else {
   for (let i=0; i<arrayOfFuncs.length; i++)
   {var z =arrayOfFuncs[i](x);
     x=z;
   }
return z;}
}