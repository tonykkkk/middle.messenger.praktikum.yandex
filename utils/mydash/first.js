// [1, 2, 3, 4] => 1

function first(list) {
    let isNonEmptyArray =  Array.isArray(list) && list.length > 0 
    if(isNonEmptyArray){
        return list[0];
      }
      return undefined;
  }