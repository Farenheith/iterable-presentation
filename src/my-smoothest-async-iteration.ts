const maxLoop = 10;
function myIterable() {
  let i = 0;
  return (async function* () {
    while (true) {
      yield i++;
    }
  })();
}

async function iterate() {
  for await (const i of myIterable()) {
    console.log(i);
    if (i > maxLoop) {
      break;
    }
  }
}

iterate();

export = 1;
