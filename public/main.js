const topMenu = document.getElementById("cong-top-menu")
const toggleIcon = document.getElementById("cong-top-menu-toggle-icon")

document.addEventListener('click', (e) => {
  if (toggleIcon.contains(e.target)) {
    topMenu.classList.toggle('hidden')
    topMenu.classList.toggle('cong-topmenu-extended')
  } else {
    if (topMenu.classList.contains('cong-topmenu-extended')) {
      topMenu.classList.remove('cong-topmenu-extended')
      topMenu.classList.add('hidden')
    }
  }
})
