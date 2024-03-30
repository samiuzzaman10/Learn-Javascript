// Try, Catch, Finally, Throw
/*
try {
  alert("Hi Everyone");
  alert(x);
} catch (err) {
  console.log(err);
  console.log(err.message);
  console.log(err.name);
} finally {
  alert("Good Bye Everyone");
}
 */


const button = document
  .querySelector("#checkButton")
  .addEventListener("click", function () {
    const num = document.querySelector("#numTextField").value;
    console.log(num);

    try{
      if(num < 5){
        throw "Input is too low";
      } else if(num > 10){
        throw "Input is too high";
      }
    }catch(err){
      console.log(err);
    }

});
