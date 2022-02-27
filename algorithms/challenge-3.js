
function isDivisbleByN(arr=[], n){
   var count = 0;
   var newArr = [];

   for (element of arr){
     if(element% n==0){
       count=element;
       newArr.push(count);
       count = 0;
     }

   }
   console.log(newArr);
 }


module.exports = isDivisbleByN
