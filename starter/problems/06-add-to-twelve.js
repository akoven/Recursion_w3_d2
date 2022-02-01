/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/
const addToTwelve = (arr) =>{
  // if(arr.length <= 1){
  //   return false;
  // }

  // let index = arr.length - 1;
  if(arr.length !== 0){
    arr.forEach((ele,i) => {
      return (ele+arr[i+1] === 12)
    });
    let shiftedArr = arr.slice(2);
    // return shiftedArr;
    return addToTwelve(shiftedArr);
  }
}

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
