// Your code here
function saturdayFun(activity="roller-skate"){
return`This Saturday, I want to ${activity}!`
}
   function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(init="*"){
  return function(adjective="a hard worker"){
      return `You are ${init}${adjective}${init}!`
  }
}
let num1=1
let num2=3
const Calculator = {
  add: function(num1,num2) {
    return num1 + num2
  },
  subtract: function(num1,num2) {
    return num1 - num2
  },
  multiply: function(num1,num2) {
    return num1 * num2
  },
  divide: function(num1,num2) {
    return num1 / num2
  }
}

 function actionApplyer(start, array) {
  let a = start
  for (let i = 0; i < array.length; i++ ){
    a = array[i](a)
  }
  return a
}
