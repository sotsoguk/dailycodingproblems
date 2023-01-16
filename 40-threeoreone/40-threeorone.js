// Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

// For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

// Do this in O(n) time and O(1) space.

// assume 8 bit numbers, only positive numbers

// Solution:
// I am sure there must be some clever XOR-Trick, but i have no idea
// so i am using a more naive approach. If we look at every
// bit position at all the numbers, if the number of 1's is
// divisible by 3, the single number has to have a 0 at this position
// accordingly, if we get numberOf1s == 1 (mod 3), the single
// number has a set bit there.

let findSingle = (arr) => {
  let numBits = 8,
    result = 0;
  for (let i = 0; i < numBits; i++) {
    let cnt = 0;
    let mask = 1 << i;
    for (let j of arr) {
      cnt += mask & j;
    }
    result |= cnt % 3 == 0 ? 0 << i : 1 << i;
  }
  return result;
};


let test = [6, 5, 3, 3, 3, 6, 6];
console.log(findSingle(test));
