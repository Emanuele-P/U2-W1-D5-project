const navBar = document.querySelector('header')

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
    const opacity = [0, 1]

    for (let i = 0; i < elements.length; i++) {
      let randomIndex = Math.floor(Math.random() * opacity.length)
      elements[i].style.opacity = opacity[randomIndex]
      elements[i].style.transitionDelay = Math.random() * 5 + 's'
    }
  }
}

setInterval(assignRandom, 2000)
