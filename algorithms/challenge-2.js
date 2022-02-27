
function divisible (a=[]){
    var mDiv = 0;
    var  count = 0;

  for( element of a){
    if((element%2==0) && (element >15)) {
    count++;

    }
  mDiv=count;
  }
    console.log(mDiv);
  }
  
module.exports = divisible
