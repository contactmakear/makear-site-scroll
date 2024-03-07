const menuBtn = document.querySelector(".menuBtn");

let openMenu = false;

menuBtn.addEventListener("click", function () {
  //   menuBtn.children[0].classList.add("move-up-animations");
  //   setTimeout(() => {
  //     menuBtn.children[0].classList.remove("move-up-animations");
  //   }, 400);

  openMenu = !openMenu;
  if (openMenu) {
    // console.log(this.children[1].children[0]);
    // console.log("Open");
    // this.children[0].textContent = "CLOSE";
    // console.log(this.children[0].textContent);
    this.children[2].children[0].classList.add("openMenu");
    this.children[0].classList.toggle("move-up");
    this.children[1].classList.toggle("move-down");
  } else if (!openMenu) {
    // console.log("Closed");

    if (this.children[2].children[0].classList.contains("openMenu")) {
      this.children[2].children[0].classList.remove("openMenu");
      this.children[0].classList.toggle("move-up");
      this.children[1].classList.toggle("move-down");
      //   this.children[0].textContent = "MENU";
      //   console.log(this.children[0].textContent);
    }
  }
});

// function animateBtn(button) {
//   console.log(button);
//   button.children[0].classList.add("move-up-animations");
//   setTimeout(() => {
//     button.children[0].classList.remove("move-up-animations");
//   }, 800);
// }
