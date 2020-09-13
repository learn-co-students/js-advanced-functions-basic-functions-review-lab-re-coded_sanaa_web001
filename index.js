// Your code here

function saturdayFun(activity="roller-skate")
{
  return `This Saturday, I want to ${activity}!`;
}


 console.log(saturdayFun());
 console.log(saturdayFun("bath my dog"));

function mondayWork(activity="go to the office")
{
  return`This Monday, I will ${activity}.`;
}

  console.log(mondayWork());
  console.log(mondayWork("work from home"));

  function wrapAdjective(m="*")
   {
      return function(s="special")
      {
        return `You are ${m}${s}${m}!`;
      }

   }

   let result = wrapAdjective()
   let emphatic = result("a hard worker")
   console.log(result())



   let  Calculator={

   };
  Calculator.add=function()
  {
     return 1+3;
  };
  Calculator.subtract=function()
  {
    return 1-3;
  }

  Calculator.multiply=function()
  {
    return 1*3;
  }
  Calculator.divide=function()
  {
    return 10/5;
  }

arr = [
    function(a){ return  a* 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ] ;


  function actionApplyer(Number,arr) {
  let n = Number

  for (let i = 0; i < arr.length; i++) {
    n = arr[i](n)
  }
  return n
}
