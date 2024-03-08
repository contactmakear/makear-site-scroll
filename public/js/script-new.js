const siteLogo = document.querySelector(".site-logo a img ");
const menuBtn = document.querySelector(".menuBtn");
const menu = menuBtn.querySelector("#menuBtn-menu");
const close = menuBtn.querySelector("#menuBtn-close");
const doubleDot = menuBtn.querySelector("#menuBtn-doubleDot");
const doubleDotImg = menuBtn.querySelector("#menuBtn-img");

const menuOverlay = document.querySelector(".overlay");
const overlayLinks = document.querySelectorAll(".overlay a");

let openMenu = false;
let activeMenu = 0;

menuBtn.addEventListener("click", function () {
  openMenu = !openMenu;

  if (openMenu) {
    doubleDotImg.classList.add("openMenu");
    menu.classList.toggle("move-up");
    close.classList.toggle("move-down");

    menuOverlay.style.opacity = 1;
    menuOverlay.style.visibility = "visible";
    menuOverlay.style.transform = "translateY(0%)  rotate(0deg)";
    menuOverlay.style.transition =
      "opacity 1s ease, visibility .5s , transform 1s";

    if (window.innerWidth < 812) {
      //! Change
      siteLogo.style.fill = "white";
      console.log("clickesdd");
    }
  } else if (!openMenu) {
    if (doubleDotImg.classList.contains("openMenu")) {
      doubleDotImg.classList.remove("openMenu");
      menu.classList.toggle("move-up");
      close.classList.toggle("move-down");

      menuOverlay.style.opacity = 0;
      menuOverlay.style.visibility = "hidden";
      menuOverlay.style.transform = "translateY(100%) rotate(8deg)";
      menuOverlay.style.transition =
        "opacity 0.5s ease, visibility 0.5s, transform 0.5s";
    }
  }
});

overlayLinks.forEach(function (link) {
  const menuText = link.querySelector(".menuText");

  link.addEventListener("mouseenter", function () {
    menuText.classList.add("moveUpAnimation");

    setTimeout(() => {
      menuText.classList.remove("moveUpAnimation");
    }, 400);
  });

  link.addEventListener("mouseleave", function () {
    menuText.classList.add("reverseMoveUpAnimation");

    setTimeout(() => {
      menuText.classList.remove("reverseMoveUpAnimation");
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

// function handleViewportWidth() {
//   if (window.innerWidth < 812) {
//     menuBtn.querySelector("#menuBtn-menu").classList.remove("move-up");
//     menuBtn.querySelector("#menuBtn-close").classList.remove("move-down");
//   }
// }

// window.addEventListener("resize", handleViewportWidth);

// handleViewportWidth();
