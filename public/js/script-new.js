const primaryColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--primary-color");

const bgColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--bg-color"
);

const siteLogo = document.querySelector(".site-logo a svg ");
const siteLogoPaths = siteLogo.querySelectorAll("path");
const menuBtn = document.querySelector(".menuBtn");
const menu = menuBtn.querySelector("#menuBtn-menu");
const close = menuBtn.querySelector("#menuBtn-close");
const doubleDot = menuBtn.querySelector("#menuBtn-doubleDot");
const doubleDotImg = menuBtn.querySelector("#menuBtn-img");

const menuOverLayContainer = document.querySelector(".overlay-container");
const menuOverlay = document.querySelector(".overlay");
const overlayLinks = document.querySelectorAll(".overlay a");

let openMenu = false;
let activeMenu = 0;

function updateOverlayBackgroundColor() {
  if (window.innerWidth < 812) {
    if (openMenu) {
      menuOverLayContainer.style.backgroundColor = primaryColor;
      document.body.style.backgroundColor = primaryColor;
      siteLogoPaths.forEach((path) => {
        path.setAttribute("fill", bgColor);
      });
    } else if (!openMenu) {
      menuOverLayContainer.style.backgroundColor = "transparent";
      document.body.style.backgroundColor = bgColor;
      siteLogoPaths.forEach((path) => {
        path.setAttribute("fill", "#2B2E3A");
      });
    }
  } else if (window.innerWidth > 812) {
    menuOverLayContainer.style.backgroundColor = "transparent";
    document.body.style.backgroundColor = bgColor;
    siteLogoPaths.forEach((path) => {
      path.setAttribute("fill", "#2B2E3A");
    });
  }
}

function toggleMenu() {
  openMenu = !openMenu;

  if (openMenu) {
    doubleDotImg.classList.add("openMenu");
    menu.classList.toggle("move-up");
    close.classList.toggle("move-down");

    menuOverlay.style.opacity = 1;
    menuOverlay.style.visibility = "visible";
    menuOverlay.style.transform = "translateY(0%)  rotate(0deg) scale(1)";
    menuOverlay.style.transition =
      "opacity 1s ease, visibility .5s , transform 1s";

    if (window.innerWidth < 812) {
      //! Change
      // siteLogo.style.fill = "white";

      siteLogoPaths.forEach((path) => {
        path.setAttribute("fill", bgColor);
      });

      menuOverLayContainer.style.backgroundColor = primaryColor;
      document.body.style.backgroundColor = primaryColor;
    }
  } else if (!openMenu) {
    if (doubleDotImg.classList.contains("openMenu")) {
      doubleDotImg.classList.remove("openMenu");
      menu.classList.toggle("move-up");
      close.classList.toggle("move-down");

      menuOverlay.style.opacity = 0;
      menuOverlay.style.visibility = "hidden";
      menuOverlay.style.transform = "translateY(100%) rotate(8deg) scale(0.5)";
      menuOverlay.style.transition =
        "opacity 0.5s ease, visibility 0.5s, transform 0.5s";
    }
    menuOverLayContainer.style.backgroundColor = "transparent";
    document.body.style.backgroundColor = bgColor;
    siteLogoPaths.forEach((path) => {
      path.setAttribute("fill", "#2B2E3A");
    });
  }
}

menuBtn.addEventListener("click", toggleMenu);

window.addEventListener("resize", () => {
  updateOverlayBackgroundColor();
});

overlayLinks.forEach(function (link) {
  const menuText = link.querySelector(".menuText");

  if (window.innerWidth > 812) {
    link.addEventListener("mouseenter", function () {
      menuText.classList.add("moveUpAnimation");

      setTimeout(() => {
        menuText.classList.remove("moveUpAnimation");
      }, 400);
    });
  }

  link.addEventListener("mouseleave", function () {
    if (window.innerWidth > 812) {
      menuText.classList.add("reverseMoveUpAnimation");

      setTimeout(() => {
        menuText.classList.remove("reverseMoveUpAnimation");
      }, 400);
    }
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

// window.addEventListener("resize", () => {
//   if (window.innerWidth < 812) {
//     menuBtn.querySelector("#menuBtn-menu").classList.remove("move-up");
//     menuBtn.querySelector("#menuBtn-close").classList.remove("move-down");
//   }
// });

// handleViewportWidth();


// Mobile menu button toggle switch
const mobileMenuBtn = document.querySelector('.mobile-menu')
const menuOverlayWindow = document.querySelector('.menu-overlay-window')
const mobileUiItems = document.querySelector('.mobile-ui-items')
const mobileContactCta = document.querySelector('.mobile-contact-cta')
const mobileSiteLogo = document.querySelector('#siteLogo').childNodes

mobileMenuBtn.addEventListener('click', toggleMenuSwitch)

function changeLogoColor() {
  for (var i=0; i<mobileSiteLogo.length; i++) {
    if (mobileSiteLogo[i].tagName == "path") {
      mobileSiteLogo[i].style.fill = "#2B2E3A"
    }
  }
}

function toggleMenuSwitch() {
  if( menuOverlayWindow.classList.contains('visi') ) {
    changeLogoColor()
    menuOverlayWindow.style.backgroundColor = 'unset'
    mobileUiItems.style.display = 'none'
    mobileContactCta.style.display = 'none'
    menuOverlayWindow.classList.remove('visi')
  } else {
    alert("show now")
  }
}