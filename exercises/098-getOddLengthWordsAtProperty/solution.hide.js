// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) return [];

  const oddWords = obj[key].filter((word) => word.length % 2 != 0);
  return oddWords;
}

let obj = {
  key: ["It", "has", "some", "words"],
};
let output = getOddLengthWordsAtProperty(obj, "key");
console.log(output); // --> ['has', 'words']
