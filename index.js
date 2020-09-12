// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(visFlair="*"){
    if(visFlair==="*"){
    return function(adj="special"){
        return`You are ${visFlair}a hard worker${visFlair}!`;
    }}
    else if(visFlair==="||"){
    return function(adj="special"){
        return`You are ${visFlair}a dedicated programmer${visFlair}!`;
    }}
    return function(adj="special"){
        return`You are ${visFlair} ${adj} ${visFlair}!`;
    }
}
    let Calculator={
      add(){return 1+3;},
      subtract(){return 1-3;},
      multiply(){return 1*3;},
      divide(){return 10/5;}
      
    }
    arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]
        function actionApplyer(start,actions){
          if(actions.length<1){return start;}
          let result=start;
          for(let i=0;i<actions.length;i++){result=actions[i](result)}
          // return actions.forEach(action=>{action(start);});
          return result;
          
        }