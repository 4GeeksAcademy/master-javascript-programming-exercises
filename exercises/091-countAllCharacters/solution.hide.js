// Write your function here
function countAllCharacters(str) {
    if(str.length == 0) {
        return {}
    }
    
    obj={}

    for(let i = 0; i < str.length; i++) {
        if(obj[str[i]]) {
            obj[str[i]] = obj[str[i]] + 1 
        } else {
            obj[str[i]] = 1
        }
    }
    return obj;
}
