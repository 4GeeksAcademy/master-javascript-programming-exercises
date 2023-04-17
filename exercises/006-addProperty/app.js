function addProperty(obj, mykey) {
  // your code here
    obj[mykey]=true;
    return obj
};

let myObj = {};

//console.log(myObj);
addProperty(myObj, 'myProperty');
//console.log(myObj);
console.log(myObj.myProperty); 
