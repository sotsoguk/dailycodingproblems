// You are given an array of length n + 1 whose elements belong to the set {1, 2, ..., n}.
// By the pigeonhole principle, there must be a duplicate. Find it in linear time and space.

// Note: a xor a = 0

let findDuplicate = (arr, n = null) => {
  if (!n) n = arr.length - 1;
  let xorSum = 0;
  for (let i=1;i<=n;i++) xorSum ^=i;
  
  // for (let j of arr) xorSum ^=j;
  return arr.reduce((s,v) => s^v,xorSum);
  // return xorSum;
};

let test = [1,2,3,4,3];
console.log(findDuplicate(test,n=4));