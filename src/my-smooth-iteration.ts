const maxLoop = 10;
const myIterable: Iterable<number> = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => ({
        done: false,
        value: i++,
      }),
    };
  },
};

for (const i of myIterable) {
  console.log(i);
  if (i > maxLoop) {
    break;
  }
}

export = 1;
