const photos = [
  "img/me.jpg",
  "img/kalin.jpg",
  "img/computer.jpg",
  "img/alan_walker.jpg",
];
const imgTag = document.querySelector("img");
let count = 0;
function next() {
  count++;
  if (count >= photos.length) {
    count = 0;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}

function previous() {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}
