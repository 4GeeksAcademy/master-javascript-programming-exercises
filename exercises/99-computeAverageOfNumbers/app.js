function computeAverageOfNumbers(nums) {
  // your code here
  if( nums.length === 0 ) return 0;
  let sum = 0;
  for (i=0; i<nums.length; i++){
    sum += nums[i];
  }
  let average = sum / nums.length;
  return average;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output);