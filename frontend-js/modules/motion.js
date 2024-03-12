import SplitType from 'split-type'
import { animate, stagger } from 'motion'

export default function motionAnimation() {

  // Nav bar animation
  const navIntroPara = new SplitType('#nav-intro-para', { types: 'lines' })
  const siteLogo = document.querySelector('.site-logo')
  const menuBtn = document.querySelector('.btns')
  const navElements = [siteLogo, ... navIntroPara.lines, menuBtn]

  animate(navElements, { y: [24, 0], opacity: [0, 1]}, {duration: 0.8, delay: stagger(0.05)})

  // Hero section animation
  
  
}