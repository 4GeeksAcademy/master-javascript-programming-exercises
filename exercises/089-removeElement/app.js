// Write your function here
function removeElement (array,element) {
    const result = array.filter(num => num != element)
    return result
}