const activeHidden = document.querySelector('.reference section')
const activeButton1440Px = document.querySelector('.reference #button')
const buttonToogle = document.querySelectorAll('.reference .toogle')

for (const element of buttonToogle) {
  element.addEventListener('click', function () {
    activeHidden.classList.toggle('active')
    activeButton1440Px.classList.toggle('active')
  })
}
