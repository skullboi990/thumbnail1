// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};

document.querySelector('model-viewer').addEventListener('progress', onProgress);

window.addEventListener('load', (event) => {
  const modelViewer = document.querySelector('model-viewer');
  // Dispatch synthetic click event
  const click = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  modelViewer.dispatchEvent(click);
});
