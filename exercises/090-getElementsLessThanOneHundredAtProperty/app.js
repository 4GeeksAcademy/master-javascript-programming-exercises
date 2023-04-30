// Write your function here
function getElementsLessThan100AtProperty(obj,key){
    my_array = []
    //Object.keys(obj)
    if (obj[key] && (typeof(obj[key])==="object") && (Array.isArray(obj[key]))){
        obj[key].forEach((e)=>{
            if(e < 100){
                my_array.push(e)
            }
        })
    }

    

    return my_array
    //return Object.keys(obj)
}

let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]
  