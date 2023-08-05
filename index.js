function hasTargetSum(array, target) {
const seenNumbers = {}

for(const number of array){
  //n step
const complement = target - number;
if(complement in seenNumbers) return true;
seenNumbers[number] = true;
}
 
return false
}
// Runtime: O(n^2)
//function hasTargetSum(array, target) {
  //for(let i = 0; i<array.length; i++){
  //const complement = target - array[i]
 // for(let j = i + 1; j<array.length; j++)
  //if (array[j] ===complement)return true
  //}

//return false;
//}
/* 
  Write the Big O time complexity of your function here
  runtime: O(n^2)
  Space: O(n)

*/
//
/* 
  Create an object to keep trach of numbers seen
  Iterate through the array once 
  For current num, identify a complement  that adds to the target (comp = target - num)
  check if any key on our object is the complement 
  if so, return true 
  otherwise, add that number to the object
  If i reach the end of the array, return false
  */


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("expecting: true");
  console.log('=>', hasTargetSum([3,8,12,4,11,7], 10));

  console.log('');

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
