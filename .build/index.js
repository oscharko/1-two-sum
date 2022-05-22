function twoSum(nums2, target2) {
  let numsMap = [];
  for (let p = 0; p < nums2.length; p++) {
    let currMapVal = numsMap[nums2[p]];
    if (currMapVal >= 0) {
      return [currMapVal, p];
    } else {
      let numToFind = target2 - nums2[p];
      numsMap[numToFind] = p;
    }
  }
  return null;
}
;
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
//# sourceMappingURL=index.js.map
