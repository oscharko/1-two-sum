function twoSum(nums: number[], target: number): number[] | any {
    let numsMap: number[] = [];

    for (let p: number = 0; p < nums.length; p++) {
        let currMapVal: number = numsMap[nums[p]];

        if (currMapVal >= 0) {
            return [currMapVal, p];
        } else {
            let numToFind: number = target - nums[p];
            numsMap[numToFind] = p;
        }
    }
    return null;
};

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));