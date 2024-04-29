const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("Task one is compleated");
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task two is compleated");
    }, 2000);
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    reject("Task three is not compleated");
  });
};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("Task four is compleated");
  });
};

taskOne()
  .then((res) => console.log(res))
  .then(taskTwo)
  .then((res) => console.log(res))
  .then(taskThree)
  .then((res) => console.log(res))
  .then(taskFour)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

/*
const paymentSuccess = true;
const marks = 70;

function enroll() {
  console.log("Course enrollment is progress.");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment failed!");
      }
    }, 2000);
  });
  return promise;
}

function progress() {
  console.log("Course on progress...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function (callback) {
      if (marks >= 80) {
        resolve;
      } else {
        reject("You could not get enough marks to get the certificate");
      }
    }, 3000);
  });
  return promise;
}

function getCertificate() {
  console.log("Preparing your certificate!");

  const promise = new promise(function (resolve) {
    setTimeout(function () {
      resolve("Congrats! You got the certificate");
    }, 1000);
  });
  return promise;
}

enroll()
  .then(progress)
  .then(getCertificate)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
*/
