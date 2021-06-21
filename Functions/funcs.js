function Reverse(input) {
  return parseInt(input.toString(2).split("").reverse().join(""), 2);
}
function Factorial(number) {
  return number === 1 || number === 0 ? 1 : number * Factorial(number - 1);
}
function Unique(string) {
  let hash = [];
  let words = string.toLowerCase().split(" ");
  words.forEach((word) => {
    if (hash.indexOf(word) === -1) hash.push(word);
  });
  return hash.join(" ");
}
