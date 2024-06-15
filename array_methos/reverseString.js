const reverseString = (str) => {
  let reverseStr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr.push(str[i]);
  }
  return reverseStr.join("");
};

const str = "Revers";
console.log(reverseString(str));
