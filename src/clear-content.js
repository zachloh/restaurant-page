function clearContent() {
  const overlay = document.querySelector('.overlay');
  const content = overlay.firstElementChild.nextElementSibling;
  overlay.removeChild(content);
}

export {
  clearContent
};