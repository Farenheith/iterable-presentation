const maxLoop = 10;
function myIterable() {
  let i = 0;
  return (function* () {
    while (true) {
      yield i++;
    }
  })();
}

for (const i of myIterable()) {
  console.log(i);
  if (i > maxLoop) {
    break;
  }
}

export = 1;
