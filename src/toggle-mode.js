const body = document.querySelector('body')
const buttonToggle = document.querySelector('.toggle-mode')

buttonToggle.addEventListener('click', () => body.classList.toggle('dark'))