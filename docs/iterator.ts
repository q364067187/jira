const obj = {
  data: ["hello", "world"],
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++] + "!",
            done: false,
          };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (let o of obj) {
  console.log(o);
}

// iterator
// iterator: https://codesandbox.io/s/upbeat-wood-bum3j?file=/src/index.js
