/*
* range(4); // => [0, 1, 2, 3] 
* range(-4); // => [0, -1, -2, -3]
* range(1, 5); // => [1, 2, 3, 4]
* range(0, 20, 5); // => [0, 5, 10, 15]
* range(0, -4, -1); // => [0, -1, -2, -3]
* range(1, 4, 0); // => [1, 1, 1]
* range(0); // => []
*/
function baseRange(start, end, step){
if((start+end+step)==0) return [];
if(step!=0){
length = Math.abs(Math.ceil(end-start)/(step || 1));
let result = new Array(length);
result[0] =start;
for (let n=1; n<length; n++ ){
      result[n]=result[n-1]+step;
    }
console.log(result);
return result;
}
else {
length = Math.abs(Math.ceil(end-start));
let result = new Array(length);
result[0] =start;
for (let n=1; n<length; n++ ){
      result[n]=result[n-1]+step;
    }
console.log(result);
return result;
}
}


function range(start=0, end, step) {
  
  if(end === undefined){
    end = start;
    start = 0;
  }
   
  if (step === undefined){
    if(start===end){
      step = 0;
    }
    else if(start<end){
      step = 1
    }
    else {
       step = -1
    }
  }
   
    
    return baseRange(start, end, step);
}




