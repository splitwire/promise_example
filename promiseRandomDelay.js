function generateRandomDelay() {
  const delay = Math.floor(Math.random() * 10) * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  })
}


module.exports = { generateRandomDelay };
