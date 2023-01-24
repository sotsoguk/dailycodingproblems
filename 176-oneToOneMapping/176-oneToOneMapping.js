// Determine whether there exists a one2one mapping between 2 string
// e.g: abc => bcd possible,
//      foo => bar not possible

let one2one = (s1, s2) => {
  let set1 = new Set(s1),
    set2 = new Set(s2);
  return set1.size == set2.size;
};

console.log(one2one("abc", "bcd"));
console.log(one2one("foo", "bar"));