
  function noOfElements(x=[],y ,z ) {
var nomber = 0;
var count = 0;

for ( let O of  x) {

   if ((O >= y) && ( O <= z)) {
count++;
   }
nomber =count;

}
console.log(nomber);
 }

module.exports = noOfElements
