

function replaceDivisible(x=[], y){
  var  count;
  var myDivisible = [];
  var newArr =[];
  
  for(element of x){
    if (element%y != 0){
      count=element;

      newArr.push(count);

    }
  else if(element%y==0){
      myDivisible ="isDivisible";
 newArr.push(myDivisible);
    }

  } 
console.log(newArr);
newArr=[];
}

module.exports = replaceDivisible
