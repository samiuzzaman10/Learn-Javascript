console.clear();
// Event Object
/*
const input = document.querySelector("input[name=name]");
input.addEventListener("change", changeHandler);

function changeHandler(e) {
    console.log(e.target.value);
}

const programs = document.querySelectorAll("input[name=program]");
Array.from(programs).map((program) => {
  program.addEventListener("change", programHandler);
});
function programHandler(e) {
    if(e.target.checked) {
        console.log(e.target.value);
    }
}

let department = document.querySelector("#department");
department.addEventListener("change", handleDepartment);

function handleDepartment(e) {
    console.log(e.target.value);
}
*/

// Event Object - onsubmit
/*
const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");

form.addEventListener("submit", formHandler);

function formHandler(e) {
    e.preventDefault();
    const userInfo = {
        name : name.value,
        email : email.value,
        password : password.value
    }
    console.log(userInfo);
    name.value = "";
    email.value = "";
    password.value = "";
}
*/

// Event Object - load_scroll_resize_toggle
/*
window.addEventListener("load", function () {
  console.log("load");
});

window.addEventListener("unload", function () {
  console.log("unload");
});

window.addEventListener("scroll", function() {
    console.log("scroll");
})

window.addEventListener("resize", function () {
  const width = this.window.outerWidth;
  const height = this.window.outerHeight;
  console.log(`height: ${height}, width: ${width}`);
});

const details = document.querySelector("details");
details.addEventListener("toggle", function(e) {
    console.log(e.target.open);
});
*/

// Mouse Event Object
/*
div.addEventListener("dblclick", function () {
  console.log("dubble click is occured");
});

div.addEventListener("mousedown", function () {
  console.log("Mouse down is occured");
});

div.addEventListener("mouseup", function () {
  console.log("Mouse Up is occured");
});

div.addEventListener("mouseenter", function () {
  console.log("Mouse Enter is occured");
});

div.addEventListener("mouseleave", function () {
  console.log("Mouse Leave is occured");
});

div.addEventListener("mousemove", function () {
  console.log("Mouse move is occured");
});

div.addEventListener("mouseover", function (e) {
  //console.log("Mouse over is occured");
  // console.log("clientX = " + e.clientX + ", clientY = " + e.clientY);
  console.log("offsetX = " + e.offsetX + ", offsetY = " + e.offsetY);
});

const div = document.querySelector("div");
div.addEventListener("click", function (e) {
  //console.log(e.target);
  //console.log(e.target.id);
  //console.log(e.target.className);
  //console.log(e.target.innerHTML);
  //console.log(e.target.innerText);
  //console.log(e.target.textContent);
});
 */

/* 
const buttons = document.querySelectorAll(".btn");
Array.from(buttons).map((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.innerText);
  });
});
*/

// Keyboard Event
/*
const textArea = document.querySelector("textarea");
textArea.addEventListener("keydown", function (e) {
  if(e.repeat){
    alert("Do not repeat")
  }
});

  textArea.addEventListener("keypress", function () {
   console.log("key press");
});

textArea.addEventListener("keyup", function (e) {
  if (e.shiftKey) {
    console.log("shift + " + e.key);
  }
});
*/

// Focus Event
/*
const input = document.querySelector("input");

input.addEventListener("blur", function (e) {
  // console.log(e.target.value);
  input.value = e.target.value.toUpperCase();
  console.log(e.target.value);
});

input.addEventListener("focus", function () {
//   input.style.backgroundColor = "orange";
//   input.style.padding = "2rem";
});

input.addEventListener("focusin", function () {
  console.log("focus in is occured");
});

input.addEventListener("focusout", function () {
  console.log("focus out is occured");
});
*/

// Clipboard Event
/*
const input = document.querySelector("input");
const para = document.querySelector("p");

input.addEventListener("copy", function () {
  para.innerText = "you have copied";
});

input.addEventListener("cut", function () {
  para.innerText = "you have cut";
});

input.addEventListener("paste", function () {
  para.innerText = "you have paste";
});
*/