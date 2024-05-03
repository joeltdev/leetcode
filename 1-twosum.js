function twosum(nums, target) {
  if (nums < 2) {
    return -1;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
}

let nums = [2, 7, 11, 15];
let target = 9;
const twosums = twosum(nums, target);
console.log(twosums);
