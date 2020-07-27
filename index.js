// Your code here
function saturdayFun (activity  = 'roller-skate'){

  return  "This Saturday, I want to" + " "+ activity+"!"  ;
}

 saturdayFun();
saturdayFun("bathe my dog");


const mondayWork = function(activity  = "go to the office") {
  return  "This Monday, I will" + " "+ activity+".";
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(flair = "*") {
  return function(saleem="special") {
    return `You are ${flair}${saleem}${flair}!`
  }
}

let Calculator = {
  add : function (first,second){ return first + second},
  subtract : function (first,second){ return first - second},
  multiply : function (first,second){ return first * second},
  divide : function (first,second){ return first / second}
}

function actionApplyer (integer=0 ,arra = [function(a){ return a * 2 },
function(a){ return a + 1000},
function(a){ return a % 7 }]){
  if(arra.length ===0)
   {return integer;}
   let result = 13;
   for (let i = 0 ; i < arra.length ;i++ ) {
     result = arra[i] (result);
   }
   return result ;
}
