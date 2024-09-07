document.onkeydown = function (event) {
  if (event.key == 123) {
    return false;
  }
  if (event.ctrlKey && event.shiftKey && event.key == 73) {
    return false;
  }
};
