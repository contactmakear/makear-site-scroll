const menuBtn = document.querySelector(".menuBtn");
const menuOverlay = document.querySelector(".overlay");
const overlayLinks = document.querySelectorAll(".overlay a");

let openMenu = false;
let activeMenu = 0;

menuBtn.addEventListener("click", function () {
  openMenu = !openMenu;

  if (openMenu) {
    menuBtn.children[2].children[0].classList.add("openMenu");
    menuBtn.children[0].classList.toggle("move-up");
    menuBtn.children[1].classList.toggle("move-down");

    menuOverlay.style.opacity = 1;
    menuOverlay.style.visibility = "visible";
    menuOverlay.style.transform = "translateY(0%)  rotate(0deg)";
    menuOverlay.style.transition =
      "opacity 1s ease, visibility .5s , transform 1s";
  } else if (!openMenu) {
    if (menuBtn.children[2].children[0].classList.contains("openMenu")) {
      menuBtn.children[2].children[0].classList.remove("openMenu");
      menuBtn.children[0].classList.toggle("move-up");
      menuBtn.children[1].classList.toggle("move-down");

      menuOverlay.style.opacity = 0;
      menuOverlay.style.visibility = "hidden";
      menuOverlay.style.transform = "translateY(100%) rotate(8deg)";
      menuOverlay.style.transition =
        "opacity 0.5s ease, visibility 0.5s, transform 0.5s";
    }
  }
});

overlayLinks.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    this.children[0].classList.add("moveUpAnimation");

    setTimeout(() => {
      this.children[0].classList.remove("moveUpAnimation");
    }, 400);
  });

  link.addEventListener("mouseleave", function () {
    this.children[0].classList.add("reverseMoveUpAnimation");

    setTimeout(() => {
      this.children[0].classList.remove("reverseMoveUpAnimation");
    }, 400);
  });
});

menuOverlay.addEventListener("click", (e) => {
  const menuItem = e.target.closest(".menuItem");
  const activeLink = menuOverlay.querySelector(".menuItem.activeMenu");

  if (menuItem) {
    e.preventDefault();
    if (activeLink !== menuItem) {
      if (activeLink) {
        activeLink.classList.remove("activeMenu");

        const activeImg = activeLink.querySelector("img");

        activeImg.classList.remove("activeDot");
        activeImg.setAttribute("src", `assets/images-new/arrow-dark.svg`);
      }
      menuItem.classList.add("activeMenu");
      const img = menuItem.querySelector("img");

      img.classList.add("activeDot");
      img.setAttribute("src", `assets/images-new/single-dot-dark.svg`);
    }
  }
});
