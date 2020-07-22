function makeAPromise2() {
  return new Promise((resolve) => resolve("I'll always be there for you"));
}

function answerAPromise() {
  return new Promise((resolve) => resolve('Really?'));
}

function promisedDiscussion() {
  makeAPromise2()
    .then((promise) => console.log(promise))
    .then(() => answerAPromise())
    .then((answer) => console.log(answer));
}

promisedDiscussion();

export = 1;
