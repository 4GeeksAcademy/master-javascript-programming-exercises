function countAllCharacters(str) {
  // your code here
  var array = str.split('');
  var obj={};

  for(var i = 0 ; i < array.length ; i++){
    var cnt = 0 ;
      for (var k = 0; k < array.length ; k++){
        if(array[i] === array[k]){
          cnt++;
        }
      obj[array[i]] = cnt;
    }
  }

  return obj;
}

var output = countAllCharacters('banana');
console.log(output);