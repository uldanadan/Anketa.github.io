/*menu*/
const menu = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')

let isOpen = false

menu.addEventListener('click', () => {

    if (isOpen) {
        nav.style.display = 'none'
        isOpen = false
    } else {
        nav.style.display = 'block'
        isOpen = true
    }

    menu.classList.toggle('open')
});


function onBirthYearChange() {
  document.getElementById('birthYear').style.color = '#1C1C1C';
}

function onSliderChange(value) {
  document.getElementById('slider-range').style.width = `${value}%`
}


