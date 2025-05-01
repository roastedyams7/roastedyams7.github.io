const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveButton() {
  const containerHeight = container.offsetHeight;
  const containerWidth = container.offsetWidth;
  const btnHeight = btnNo.offsetHeight;
  const btnWidth = btnNo.offsetWidth;

  const newTop = getRandomNumber(0, containerHeight - btnHeight);
  const newLeft = getRandomNumber(0, containerWidth - btnWidth);

  btnNo.style.position = "absolute";
  btnNo.style.top = `${newTop}px`;
  btnNo.style.left = `${newLeft}px`;
}

// Add event listeners for both desktop and mobile
btnNo.addEventListener("mouseover", moveButton);
btnNo.addEventListener("touchstart", moveButton);

btnYes.addEventListener("click", () => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});
