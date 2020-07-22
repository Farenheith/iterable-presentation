const maxLoop = 10;
async function theAsyncHeaven() {
  for (let i = 0; i < maxLoop; i++) {
    console.log(await new Promise((resolve) => resolve(i)));
  }

  for (let i = 10; i > 0; i--) {
    console.log(await new Promise((resolve) => resolve(i)));
  }

  console.log('Finished!');
}

theAsyncHeaven();

export = 1;
