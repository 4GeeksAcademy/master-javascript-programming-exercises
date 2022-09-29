let search = function (arr, x) {
  
  let start=0, end=arr.length-1;
  while (start<=end){
      let mid=Math.floor((start + end)/2);
      if (arr[mid]===x) return mid;
      else if (arr[mid] < x)
           start = mid + 1;
      else
           end = mid - 1;
  }
  return null;
}


let arr = [1, 3, 16, 22, 31, 33, 34];
console.log(search(arr, 31)); // => 4
