let canvas = document.getElementById('canvas');
let colorSelector = document.getElementById('color');
let clear = document.getElementById('clear');
let ctx = canvas.getContext("2d");
ctx.strokeStyle = '#000';

function drawCircle(dia, x, y){

  ctx.beginPath();
  ctx.arc(x,y,dia,0,360,false);
  ctx.stroke();
}

function followMe(e) {
      var x = e.offsetX==undefined?e.layerX:e.offsetX;
      var y = e.offsetY==undefined?e.layerY:e.offsetY;
      drawCircle(1, x, y);
}
function changeColor(e) {
  ctx.strokeStyle = e.target.value;
}
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function startDrawing() {
  canvas.addEventListener('mousemove', followMe);
}
function stopDrawing() {
  canvas.removeEventListener('mousemove', followMe);
}

colorSelector.addEventListener('change', changeColor);
clear.addEventListener('click', clearCanvas);

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
