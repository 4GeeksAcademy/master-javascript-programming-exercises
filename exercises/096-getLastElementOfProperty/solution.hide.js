// Write your function here
function getLastElementOfProperty(obj, key){
    if(!obj[key] || !Array.isArray(obj[key])) {
        return undefined;
    }

    return obj[key][obj[key].length-1]
}