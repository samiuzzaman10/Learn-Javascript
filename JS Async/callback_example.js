const paymentSuccess = true;
const marks = 70;

function enroll(callback) {
  console.log("Course enrollment is in progress.");

  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("Payment failed!");
    }
  }, 2000);
}

function progress() {
  console.log("Course on progress...");

  setTimeout(function (callback) {
    if (marks >= 80) {
      callback();
    } else {
      console.log("You could not get enough marks to get the certificate");
    }
  }, 3000);
}

function getCertificate() {
  console.log("Preparing your certificate!");
  setTimeout(function () {
    console.log("Congrats! You got the certificate");
  }, 1000);
}

// Normal function
enroll(function () {
  progress(getCertificate);
});

// Arrow Function
/*
enroll(() => {
  progress(() => {
    getCertificate();
  });
});
*/
