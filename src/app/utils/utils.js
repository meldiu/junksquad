export const smoothScroll = idElement => {
  const targetElement = document.getElementById(idElement)
  targetElement.scrollIntoView({ block: 'center', behavior: 'smooth' })
}
