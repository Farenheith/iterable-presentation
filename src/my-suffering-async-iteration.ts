const maxLoop = 10;
const myIterable: AsyncIterable<number> = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next: (): Promise<IteratorResult<number>> =>
        new Promise((resolve) =>
          resolve({
            done: false,
            value: i++,
          }),
        ),
    };
  },
};

const iterator = myIterable[Symbol.asyncIterator]();

function iterate(): Promise<void> {
  return iterator.next().then((next) => {
    if (!next.done) {
      console.log(next.value);
      if (next.value <= maxLoop) {
        return iterate();
      }
    }
  });
}

iterate();

export = 1;
