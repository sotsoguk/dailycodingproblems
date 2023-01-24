let choice = (items, weights = null) => {
  // select random from items with weight. if no weights are given,
  // select equal probs
  if (!items) return null;
  let n = items.length;
  if (!weights) {
    weights = Array.from({ length: n }, () => 1.0 / n);
  }
  let s = 0.0,
    r = Math.random();
  for (let i = 0; i < n - 1; i++) {
    s += weights[i];
    if (r <= s) return items[i];
  }
  return items.slice(-1)[0];
};

let markovChain = (data, start, runs = 100) => {
  let counter = {};
  for (let k in data) counter[k] = 0;
  let curr = start;
  for (let i = 0; i < runs; i++) {
    counter[curr] += 1;
    curr = choice(data[curr].items, data[curr].weights);
  }
  return counter;
};

let testData = {
  a: {
    items: ["a", "b", "c"],
    weights: [0.9, 0.075, 0.025],
  },
  b: {
    items: ["a", "b", "c"],
    weights: [0.15, 0.8, 0.05],
  },
  c: {
    items: ["a", "b", "c"],
    weights: [0.25, 0.25, 0.5],
  },
};
console.log(markovChain(testData, "a", 5000));
