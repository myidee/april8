var topPosition = 100;
var leftPosition = 100;
var intervalID = setInterval(ballMove, 500);
var ball = document.getElementById("ball");
ball.style.position = "absolute";
document.getElementById("slider").addEventListener("input", slideChange);
ball.addEventListener('click', explode)
function ballMove() {
  ball.style.left = leftPosition + "px";
  ball.style.top = topPosition + "px";
  topPosition = Math.random()*(window.innerHeight -200);
  leftPosition = Math.random()*(window.innerWidth - 200)
}
function slideChange() {
  speed = document.getElementById("slider").value;
  clearInterval(intervalID);
  intervalID = setInterval(ballMove, speed);
}
function explode() {
    document.getElementById('ball').src="explosion.webp"
    clearInterval(intervalID);
}