let picture = document.getElementById("picture");
let pictureCoords = picture.getBoundingClientRect();
let ruler = document.getElementById("ruler");
let aimer = document.getElementById("aimer");
let rulerCtx = ruler.getContext("2d");
let aimerCtx = aimer.getContext("2d");

function upload(e) {
  let file = e.target.files[0];
  picture.src = URL.createObjectURL(file);
  picture.onload = () => {
    ruler.width = picture.width;
    ruler.height = picture.height;
    aimer.width = picture.width;
    aimer.height = picture.height;
    pictureCoords = picture.getBoundingClientRect();
  };
}

function showAim(e) {
  aimerCtx.clearRect(0, 0, aimer.width, aimer.height);
  let { clientX, clientY } = e;
  let x = clientX - pictureCoords.left;
  let y = clientY - pictureCoords.top;

  aimerCtx.beginPath();
  aimerCtx.strokeStyle = "#00ff00";
  aimerCtx.moveTo(0, y);
  aimerCtx.lineTo(aimer.width, y);
  aimerCtx.moveTo(x, 0);
  aimerCtx.lineTo(x, aimer.height);
  aimerCtx.stroke();
}
ruler.onmousemove = showAim;

function point(x, y) {
  rulerCtx.beginPath();
  rulerCtx.arc(x, y, 7, 0, 2 * Math.PI);
  rulerCtx.fillStyle = "#00ff00";
  rulerCtx.fill();
}

let one = [-1, -1];
let firstClick = true;
let distance = 0;
function getCoords(e) {
  let { clientX, clientY } = e;
  let x = clientX - pictureCoords.left;
  let y = clientY - pictureCoords.top;
  console.log(x, y);
  if (firstClick) {
    rulerCtx.clearRect(0, 0, aimer.width, aimer.height);
    one = [x, y];
  } else {
    distance = Math.sqrt(Math.pow(x - one[0], 2) + Math.pow(y - one[1], 2));
    console.log(distance);
  }
  point(x, y);
  firstClick = !firstClick;
  return distance;
}
ruler.onclick = getCoords;
