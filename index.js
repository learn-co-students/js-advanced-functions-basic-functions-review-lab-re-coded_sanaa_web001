// Your code here

function saturdayFun(activity = 'roller-skate')
{
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");


function mondayWork(activity = 'go to the office'){
  return `This Monday, I will ${activity}.`;

}
mondayWork();
mondayWork("work from home");






  //   it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
  //     let result = wrapAdjective()
  //     let emphatic = result("a hard worker")
  //     expect(emphatic).to.equal("You are *a hard worker*!")
  //   });

  //   it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
  //     let result = wrapAdjective("||")
  //     let emphatic = result("a dedicated programmer")
  //     expect(emphatic).to.equal("You are ||a dedicated programmer||!")
  //   });
  // })

let Calculator = {
  add : function(x , y) {return x+y} ,
  subtract: function(x,y){return x-y},
  multiply:function(x,y){return x*y},
  divide:function(x,y){return x/y},

}
Calculator.add(1,3);
Calculator.subtract(1,3) ;
Calculator.multiply(1,3)
Calculator.divide(10,5)



function actionApplyer(a, arr){
  if(a === 0)
  return 0;
  return 4 ;
}
arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ];
actionApplyer(0 ,[])  ;
 actionApplyer(13, arrayOfTransforms);


 function wrapAdjective(x = '*') {
   return function ( f = 'special') {
     return `You are ${x + f + x}!` ;

   }
 }
let f = wrapAdjective()('a hard worker');
let x = wrapAdjective('||')('a dedicated programmer');



    //   it("Given 13, returns 4 after being acted on by several functions", function() {
    //     let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
    //     arrayOfTransforms = [
    //       function(a){ return a * 2 },
    //       function(a){ return a + 1000},
    //       function(a){ return a % 7 }
    //     ]
    //     expect(actionApplyer(13, arrayOfTransforms)).to.equal(4, message)
    //   })
    // })
