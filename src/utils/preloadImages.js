export const preloadImages = () => {
  const images = [
    '../images/header-01.webp',
    '../images/header-02.webp',
    '../images/header-02.webp'
  ]

  for (let i = 0; i < images.length; i++) {
    const img = new Image()
    img.src = images[i]
  }
}
