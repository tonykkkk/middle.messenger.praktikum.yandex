/*
isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ 'a': 1 }); // => false
isEmpty('123'); // => false
isEmpty(123); // => true
isEmpty(''); // => true
isEmpty(0); // => true
isEmpty(undefined) // => true
isEmpty(new Map([['1', 'str1'], [1, 'num1'], [true, 'bool1']])) // => false
isEmpty(new Set(['value1', 'value2', 'value3'])) // => false
*/

function isEmpty(value) {
	let ans = true;
   if(typeof value === 'undefined'){
     return true;
  }
  if(typeof value === 'object'){
    if(value === null) return true;
    return false;
  }
  
  if( Array.isArray(value)){
    if(value.length>0) return false;
  }
  
  if(typeof value === 'string'){
    if(value != '') return false;
  }
  //if(typeof value === 'number'){
  //  if(value != 0) return false;
  //}
  return true;
}