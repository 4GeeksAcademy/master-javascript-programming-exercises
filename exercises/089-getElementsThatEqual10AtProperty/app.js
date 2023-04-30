// Write your function here
function getElementsThatEqual10AtProperty(obj,key){
    my_array = []
    //Object.keys(obj)
    if (obj[key] && (typeof(obj[key])==="object") && (Array.isArray(obj[key]))){
        obj[key].forEach((e)=>{
            if(e ===10){
                my_array.push(e)
            }
        })
    }

    

    return my_array
    //return Object.keys(obj)
}

let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]
  