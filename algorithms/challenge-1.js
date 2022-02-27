
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
 noOfElements([2,3,0,1,7], 4, 8) ;
noOfElements([3,3,3,5,18,6,20], 15, 30);
noOfElements([4,6,2,6,7,7], 0, 7);
noOfElements([4,6,2,6,7,7, 15, 18, 27], 5, 28);


module.exports = noOfElements
