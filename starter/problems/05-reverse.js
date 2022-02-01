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

const reverse = (str) => {
  if (str.length === 0) {
    return "";
  }

  if (str.length === 1) {
    return str;
  }
  // ['h','o','u','s','e']
  let array = str.split("");
  let newFirst = array.pop();
  let newString = "";
  if (newString.length < str.length) {
    newString += newFirst;
    //esuoh
  }
  return reverse(str);
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
