function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if((!obj[key] || obj[key].length == 0) || !Array.isArray(obj[key])){
      return [];
    }
    let evenArr = []
    obj[key].forEach(element => {
      if(element.length%2==0){
        evenArr.push(element);
      }
    });
    return evenArr;
    
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
