const navBar = document.querySelector('header')

let scrollPosition = window.scrollY || document.documentElement.scrollTop
const changeHeight = document.querySelector('.trending-wrapper').offsetHeight

if (scrollPosition > changeHeight) {
  navBar.classList.add('scrolled')
} else {
  navBar.classList.remove('scrolled')
}

window.addEventListener('scroll', function () {
  let scrollPosition = window.scrollY || this.documentElement.scrollTop

  const changeHeight = document.querySelector('.trending-wrapper').offsetHeight
  if (scrollPosition > changeHeight) {
    navBar.classList.add('scrolled')
  } else {
    navBar.classList.remove('scrolled')
  }
})

const assignRandom = function () {
  const elements = document.querySelectorAll('.artwork svg path')

  for (let i = 0; i < elements.length; i++) {
    if (Math.random() > 0.5) {
      elements[i].classList.add('visible')
    } else {
      elements[i].classList.remove('visible')
    }
    elements[i].style.transitionDelay = Math.random() * 5 + 's'
  }
}
assignRandom()
setInterval(assignRandom, 5000)
