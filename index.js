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
