// Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

// Do this in linear time and in-place.

// For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

// Also known as "Danish Flag" Sorting

// sort an array of 2 different elements, sort B < G
let choice = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};
let sort2 = (arr) => {
  if (arr.length <= 1) return arr;
  let low = 0,
    hi = arr.length - 1;
  while (low <= hi) {
    if (arr[low] == "G") {
      [arr[low], arr[hi]] = [arr[hi], arr[low]]; //swap
      hi -= 1;
    } else {
      low += 1;
    }
  }
  return arr;
};
let sort3 = (arr) => {
  if (arr.length <= 1) return arr;
  let low = 0,
    mid = 0,
    hi = arr.length - 1;
  while (mid <= hi) {
    if (arr[mid] == "R") {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low += 1;
      mid += 1;
    } else if (arr[mid] == "G") {
      mid += 1;
    } else {
      // B
      [arr[mid], arr[hi]] = [arr[hi], arr[mid]];
      hi -= 1;
    }
  }
  return arr;
};
let items2 = ["G", "R"];
let items3 = ["G", "B", "R"];
let numItems = 10;
let testArray1 = [];
let testArray2 = [];
for (let i = 0; i < numItems; i++) testArray1.push(choice(items2));
for (let i = 0; i < numItems; i++) testArray2.push(choice(items3));
console.log(testArray1);
console.log(sort2(testArray1));

console.log(testArray2);
console.log(sort3(testArray2));
