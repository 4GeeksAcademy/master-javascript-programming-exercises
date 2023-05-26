// Write your function here
function getAverageOfElementsAtProperty(obj, key) {
    // your code here
    // get values
    // get average
    let myarr = obj[key]

    if(myarr.length == 0){
      return 0
    } else {
      let sum = 0;
      for (let i = 0; i < myarr.length; i++) {
        sum += myarr[i];
    }
    return sum / myarr.length

    }

    
    
  }



let obj = {
    key: [1, 2, 3]
  };
  let output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2
  