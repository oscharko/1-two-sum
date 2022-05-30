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

/****************************************/

function twoSumWithMap(nums: number[], target: number): number[][] {
    let newMap: Map<number, number> = new Map(),
        temp: number[][] = [];
    for (let p: number = 0; p < nums.length; p++) {
        if (nums[p] < target) {
            let currMapVal: number | undefined = newMap.get(nums[p]);
            if (currMapVal !== undefined) {
                temp.push([currMapVal, p]);
            } else {
                let numToFind: number = target - nums[p];
                newMap.set(numToFind, p);
            }
        }
    }
    return temp;
}

let numsWithMap = [20, 30, 2, 7, 11, 15, 4, 5];

console.log(twoSumWithMap(numsWithMap, target));

/****************************************/

function twoSumTwoArray(
    numsOne: number[],
    numsTwo: number[],
    target: number
): number[][] {
    let temp: number[][] = [];
    for (let i: number = 0; i < numsOne.length; i++) {
        if (numsOne[i] < target) {
            for (let p: number = 0; p < numsTwo.length; p++) {
                if (numsOne[i] + numsTwo[p] === target) {
                    temp.push([i, p]);
                }
            }
        }
    }
    return temp;
}

let numsOne = [1, 2, 3, 4, 6];
let numsTwo = [3, 5, 7, 8, 9];

console.log(twoSumTwoArray(numsOne, numsTwo, target));
