const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft;
   /*x=horizontal     mouse pointers */
  const y = event.pageY - btnEl.offsetTop;

  /* y=vertical    mouse pointers*/
  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});