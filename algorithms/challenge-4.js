

function highestSum(x=[],y=[]){

  var count = 0;
  var sumArr1 = 0;
  var sumArr2=0;
  var sumSum =0;

  for (element of x){
  sumArr1 += element;

  }
  for (element of y){
    sumArr2  += element  ;
  }
    if (sumArr1 >sumArr2) {
    console.log(sumArr1);
    }
    else if (sumArr2 > sumArr1){
      console.log(sumArr2);
    }


}

module.exports = highestSum