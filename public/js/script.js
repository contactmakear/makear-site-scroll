// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo(0, 0);
}
//add functionality if user is revisting then it won't scroll to top.
window.onload = scrollToTop()

//DOM Elements
const menuTrigger = document.querySelector(".bars")
const enterBtn = document.querySelector(".enter-button")
const movie = document.querySelector(".movie")
const bg = document.querySelector(".bg")


//Menu Overlay
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//jQuery
lasScrTop = 0;
opa = 1;
sca = 5;
$(window).scroll(function () {
  winTop = $(this).scrollTop();
  winMid = $(window).height() / 2 + winTop;
  winBot = $(window).height() + winTop;
  // scroll到li,執行動態
  $(".scroll-wrap li").each(function () {
    liHei = $(this).height();
    liOff = $(this).offset();
    liTop = liOff.top;
    liBot = liTop + liHei;
    if (liBot <= winMid || liTop >= winBot) {
      // li滑出視窗時移除 inView
      $(this).removeClass("inView");
    } else if (liTop <= winMid) {
      // li滑到中間時，加入 inView
      $(this).addClass("inView");
    }
    inViewEq = $(".inView").index() + 1;
    console.log(inViewEq);
    $(".movie")
      .attr("class", "")
      .addClass("movie step-" + inViewEq);


      let imageSteps = "step-".concat(inViewEq)

      if (imageSteps == "step-1") {
          bg.children[0].src = "assets/images/scroll-down-image.png"
      } else if (imageSteps == "step-2") {
        // bg.children[0].src = "assets/images/step-2-bg.png"
      } else if (imageSteps == "step-3") {
          bg.children[0].src = "assets/images/bg-actor.png"
      } else if(imageSteps == "step-4") {
        bg.children[0].src = "assets/images/bg-system.png"
      } else if (imageSteps == "step-5") {
        bg.children[0].src = "assets/images/bg-step-5.png"
      } else if (imageSteps == "step-6") {
        bg.children[0].src = "assets/images/bg-step-6.png"
      } else if ( imageSteps == "step-7" ) {
        bg.children[0].src = "assets/images/bg-step-7.png"
      } else if ( imageSteps == "step-8" ) {
        bg.children[0].src = "assets/images/bg-step-7.png"
        bg.children[0].style.borderRadius = "25px"
      }else {
        //bg.children[0].src = "assets/images/"
      }
  });
  // 判斷scroll往上滑或往下滑
  if (winTop > lasScrTop) {
    // 往下滑
  } else {
    // 往上滑
  }
  lasScrTop = winTop;
});
enterBtn.children[0].addEventListener("click", scrollWin)

function scrollWin() {
  window.scrollBy(0, 620);
}