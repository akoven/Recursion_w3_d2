/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here

// const reverse = (str, newString = "") => {
//   if (str.length === 0) {
//     return newString;
//   }
//   let array = str.split("");
//   let newFirst = array.pop();
//   newString += newFirst;
//   let arrayString = array.join("");
//   return reverse(arrayString, newString);
// };

const reverse = (str) => {
  if (str.length === 0) {
    return str;
  }
};
// e
//hous

console.log(reverse("house")); // "esuoh"

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
