async function makeAPromise() {
  return "I'll always be there for you";
}

async function answerAPromise() {
  return 'Really?';
}

async function promisedDiscussion() {
  const promise = await makeAPromise();

  console.log(promise);

  const answer = await answerAPromise();

  console.log(answer);
}

promisedDiscussion();

export = 1;
