const { generateRandomDelay } = require("./promiseRandomDelay");


const exampleAsync = async () => {
  try {
    const delay = await generateRandomDelay();

    console.log(delay);
  }
  catch (error) {
    console.log(error);
  }
  finally {
    process.exit();
  }
}

const examplePromise = () => {
  generateRandomDelay()
    .then(delay => {
      console.log(delay);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      process.exit();
    });
}
