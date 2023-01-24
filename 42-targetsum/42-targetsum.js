// Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k. If such a subset cannot be made, then return null.

// Integers can appear more than once in the list. You may assume all numbers in the list are positive.

// For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.


let findSumSet = (arr,target) =>{
    console.log(arr,target);
    if (arr == null) return null;
    if (arr[0] == target) {
        return [target];
    }
    let withoutCurr = findSumSet(arr.slice(1,),target-arr[0]);
    if (withoutCurr) return withoutCurr.unshift(arr[0]);
    return findSumSet(arr.slice(1,),target);
}

let test = [12,1,61,5,9,2]

console.log(findSumSet(test,13));