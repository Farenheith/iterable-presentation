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

async function iterate() {
  for await (const i of myIterable) {
    console.log(i);
    if (i > maxLoop) {
      break;
    }
  }
}

iterate();

export = 1;
