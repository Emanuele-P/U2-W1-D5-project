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

/*
const assignRandom = function () {
  const elements = document.querySelectorAll('.artwork svg path')

  for (let i = 0; i < elements.length; i++) {
    const opacity = [0, 1]

    for (let i = 0; i < elements.length; i++) {
      let randomIndex = opacity[Math.floor(Math.random() * opacity.length)]
      elements[i].style.opacity = opacity[randomIndex]
      elements[i].style.transitionDelay = Math.random() * 5 + 's'
    }
  }
}

setInterval(assignRandom, 2000) */

const assignRandom = function () {
  const elements = document.querySelectorAll('.artwork svg path')

  for (let i = 0; i < elements.length; i++) {
    if (Math.random() > 0.5) {
      elements[i].style.opacity = 1
    } else {
      elements[i].style.opacity = 0
    }
    elements[i].style.transitionDelay = Math.random() * 5 + 's'
  }
}

setInterval(assignRandom, 1000)
