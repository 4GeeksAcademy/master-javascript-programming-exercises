function search(array, value) {
     // your code here
     let start = 0
     let end = array.length - 1;
     while (start <= end) {
          let mid = Math.floor((start + end) / 2);
          if (array[mid] === value) return mid;
          else if (array[mid] < value)
               start = mid + 1;
          else
               end = mid - 1;
     }
     return null;
}

let arr = [1, 3, 16, 22, 31, 33, 34];
console.log(search(arr, 31)); // --> 4
