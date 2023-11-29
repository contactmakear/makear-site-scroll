import Activate from './modules/activate'
import Perspective from './modules/perspective'

//new Activate()
new Perspective()

const projectThumbnail1 = document.querySelector(".project-thumbnail-1")
const projectThumbnail2 = document.querySelector(".project-thumbnail-2")
const projectThumbnail3 = document.querySelector(".project-thumbnail-3")

projectThumbnail1.addEventListener("click", showCaseStudyForm1)
projectThumbnail2.addEventListener("click", showCaseStudyForm2)
projectThumbnail3.addEventListener("click", showCaseStudyForm3)

function showCaseStudyForm1() {
    projectThumbnail1.parentElement.children[1].classList.remove("hide-me")

}
function showCaseStudyForm2() {
    projectThumbnail2.parentElement.children[1].classList.remove("hide-me")

}
function showCaseStudyForm3() {
    projectThumbnail3.parentElement.children[1].classList.remove("hide-me")

}

const closeIcon1 = document.getElementById("closeIcon1")
const closeIcon2 = document.getElementById("closeIcon2")
const closeIcon3 = document.getElementById("closeIcon3")

closeIcon1.addEventListener("click", hideCaseStudy1)
closeIcon2.addEventListener("click", hideCaseStudy2)
closeIcon3.addEventListener("click", hideCaseStudy3)

function hideCaseStudy1() {
    projectThumbnail1.parentElement.children[1].classList.add("hide-me")
}

function hideCaseStudy2() {
    projectThumbnail2.parentElement.children[1].classList.add("hide-me")
}

function hideCaseStudy3() {
    projectThumbnail3.parentElement.children[1].classList.add("hide-me")
}