function toggleMode() {
  const html = document.documentElement

  // Alterna entre light e dark
  html.classList.toggle("light")

  // Troca a imagem dependendo do modo
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
