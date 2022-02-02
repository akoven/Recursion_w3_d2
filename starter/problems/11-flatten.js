/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
const flatten = (arr) =>{
  if(arr.length === 0){
    return [];
  }

  let ele = arr.shift();
  // console.log(ele);
  if(Array.isArray(ele)){
    ele = flatten(ele);
    return ele;
  }else{
    return [ele].concat(flatten(arr))
  }

}

// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
