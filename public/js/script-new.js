//checking if user is browsing on mobile or not
window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

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

const navHeading = document.querySelector(".headline");
const mobileContactBtn = document.querySelector(".mobile-contact-btn");

const aboutSection = document.querySelector(".about");
const topRibbon = document.querySelector("#top-ribbon");
const topRibbonPath = topRibbon.querySelector("path");

const thumbVideo = document.querySelector(".about-video-complete");

let openMenu = false;
let activeMenu = 0;

function updateOverlayBackgroundColor() {
  if (window.innerWidth < 812) {
    if (openMenu) {
      // menuOverLayContainer.style.backgroundColor = primaryColor;
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

    if (mobileCheck()) {
      navHeading.style.display = "none";
      setTimeout(() => {
        mobileContactBtn.style.display = "flex";
        mobileContactBtn.style.opacity = 1;
        mobileContactBtn.style.visibility = "visible";
        mobileContactBtn.style.transform =
          "translateY(0%)  rotate(0deg) scale(1)";
        mobileContactBtn.style.transition =
          "opacity 1s ease, visibility .5s , transform 1s";
      }, 200);
    }

    if (window.innerWidth < 812) {
      //! Change
      // siteLogo.style.fill = "white";

      siteLogoPaths.forEach((path) => {
        path.setAttribute("fill", bgColor);
      });

      // menuOverLayContainer.style.backgroundColor = primaryColor;
      document.body.style.backgroundColor = primaryColor;
    }
  } else if (!openMenu) {
    if (doubleDotImg.classList.contains("openMenu")) {
      doubleDotImg.classList.remove("openMenu");
      menu.classList.toggle("move-up");
      close.classList.toggle("move-down");

      navHeading.style.display = "block";
      mobileContactBtn.style.opacity = 0;
      mobileContactBtn.style.visibility = "hidden";
      mobileContactBtn.style.transform =
        "translateY(100%) rotate(-8deg) scale(0.5)";
      mobileContactBtn.style.transition =
        "opacity 0.5s ease, visibility 0.5s, transform 0.5s";

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
const mobileMenuBtn = document.querySelector(".mobile-menu");

const menuOverlayWindow = document.querySelector(".menu-overlay-window");
const mobileUiItems = document.querySelector(".mobile-ui-items");
const mobileContactCta = document.querySelector(".mobile-contact-cta");
const mobileSiteLogo = document.querySelector("#siteLogo").childNodes;

// mobileMenuBtn.addEventListener("click", toggleMenuSwitch);

function changeLogoColor() {
  for (var i = 0; i < mobileSiteLogo.length; i++) {
    if (mobileSiteLogo[i].tagName == "path") {
      mobileSiteLogo[i].style.fill = "#2B2E3A";
    }
  }
}

function toggleMenuSwitch() {
  if (menuOverlayWindow.classList.contains("visi")) {
    changeLogoColor();
    menuOverlayWindow.style.backgroundColor = "unset";
    mobileUiItems.style.display = "none";
    mobileContactCta.style.display = "none";
    menuOverlayWindow.classList.remove("visi");
  } else {
    alert("show now");
  }
}

// const scroll = () => {
//   const distance = window.scrollY;
//   const halfViewportHeight = window.innerHeight / 2;
//   const svgContainerPosition = aboutSection.getBoundingClientRect().top;
//   const startAnimationPosition = halfViewportHeight;

//   if (svgContainerPosition <= startAnimationPosition) {
//     const distanceFromAnimationStart =
//       startAnimationPosition - svgContainerPosition;

//     const totalDistance = topRibbon.clientHeight - startAnimationPosition;

//     const percentage = distanceFromAnimationStart / totalDistance;

//     const pathLength = topRibbonPath.getTotalLength();

//     const strokeDashOffset = pathLength * (1 - percentage);

//     topRibbonPath.style.strokeDasharray = `${pathLength}`;
//     topRibbonPath.style.strokeDashoffset = `${strokeDashOffset}`;
//   }
// };

// scroll();
// window.addEventListener("scroll", scroll);

const scroll = () => {
  const distance = window.scrollY;
  const halfViewportHeight = window.innerHeight / 2;
  const svgContainerPosition = aboutSection.getBoundingClientRect().top;
  const startAnimationPosition = halfViewportHeight;

  if (svgContainerPosition <= startAnimationPosition) {
    topRibbon.style.visibility = "visible";
    const distanceFromAnimationStart =
      startAnimationPosition - svgContainerPosition;

    const totalDistance = topRibbon.clientHeight - startAnimationPosition;

    const percentage = distanceFromAnimationStart / totalDistance;

    const pathLength = topRibbonPath.getTotalLength();

    const strokeDashOffset = pathLength * (1 - percentage);

    // topRibbonPath.style.strokeDasharray = `${pathLength}`;
    // topRibbonPath.style.strokeDashoffset = `${strokeDashOffset}`;

    // Stop animating once complete ribbon appears
    if (percentage <= 1) {
      topRibbonPath.style.strokeDasharray = `${pathLength}`;
      topRibbonPath.style.strokeDashoffset = `${strokeDashOffset}`;
    } else {
      topRibbonPath.style.strokeDasharray = 0;
      topRibbonPath.style.strokeDashoffset = 0;
    }
  } else {
    topRibbon.style.visibility = "hidden";
  }
};

scroll();
window.addEventListener("scroll", scroll);
