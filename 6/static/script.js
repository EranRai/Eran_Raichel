var rotationDegrees = 0;

function rotateButton() {
  var button = document.querySelector(".rotate-button");
  rotationDegrees += 90;
  button.style.transform = "rotate(" + rotationDegrees + "deg)";
}
