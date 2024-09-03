document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    // alert("Ruk ja bete!")
    return false;
  }
  if (e.ctrlKey && e.shiftKey && event.keyCode == 73) {
    // alert("Ruk ja bete!")
    return false;
  }
};
