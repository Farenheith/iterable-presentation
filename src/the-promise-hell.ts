const maxLoop = 10;

function thePromiseHell() {
  let i = 0;
  function recursive2(): Promise<void> {
    return new Promise((resolve) => resolve(console.log(i))).then(() =>
      --i > 0 ? recursive2() : console.log('Finished!'),
    );
  }

  function recursive(): Promise<void> {
    return new Promise((resolve) => resolve(console.log(i))).then(() =>
      ++i < maxLoop ? recursive() : recursive2(),
    );
  }

  return recursive();
}

thePromiseHell();

export = 1;
