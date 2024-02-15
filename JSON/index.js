/* JSON Data Viewer (Validation Checking, Beauty, Minify) Website - https://codebeautify.org/jsonviewer */

// json
const data = fetch("./Practice Project.json")
  .then((re) => re.json())
  .then((re) => console.log(re.full[1].Limiter_Fuse[0].Ampere_max[2]));
