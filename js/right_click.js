function handleMouseDown(e) {
  if (e.button === 2) rightMouseClicked = true;
  if(rightMouseClicked == true) {
	start_unos = performance.now();
	document.getElementById('result').innerHTML = "";
  }
}

function handleMouseUp(e) {
  if (e.button === 2) {
    rightMouseClicked = false;
  }
}

document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mouseup', handleMouseUp);

set_zad();