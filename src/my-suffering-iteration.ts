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

const iterator = myIterable[Symbol.iterator]();
for (
  let next = iterator.next();
  !next.done && next.value <= maxLoop;
  next = iterator.next()
) {
  console.log(next.value);
}

export = 1;
