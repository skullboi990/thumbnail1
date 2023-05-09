let direction = 0.5;
let angle = 0;

function rotate() {
  const modelViewer = document.querySelector('model-viewer');
  angle += direction;
  if (angle > 50) {
    direction = -0.5;
  } else if (angle < -50) {
    direction = 0.5;
  }
  modelViewer.setAttribute('camera-orbit', `${angle}deg 75deg auto`);
  requestAnimationFrame(rotate);
}

window.addEventListener('load', (event) => {
  const modelViewer = document.querySelector('model-viewer');
  // Dispatch synthetic click event
  const click = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  modelViewer.dispatchEvent(click);

  // Start the rotation
  rotate();
});
