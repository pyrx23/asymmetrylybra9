document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    disableBtns();
  }, 500);
});

function disableBtns() {
  const btns = document.getElementsByTagName("button");
  for (let i = 0; i < btns.length; i++) {
    const element = btns[i];
    element.disabled = true;
  }
}
