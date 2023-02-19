const headerMobile = document.querySelector('.header__mobile')
const header = document.querySelector('.header')

const burger = document.createElement('img')
burger.src = './img/icons/mobile-header/burger.svg';
burger.style.width = '50px'
burger.classList.add('burger')

headerMobile.appendChild(burger)



headerMobile.innerHTML += `
<a href="#" class="header__mobile__logo">
<div>
    <img src='img/logo.svg' alt="" width="180px">
</div>
</a>
`

const cartImg = document.createElement('img')
const profileImg = document.createElement('img')

cartImg.src = './img/icons/mobile-header/cart.svg';
profileImg.src = './img/icons/mobile-header/profile.svg';

cartImg.style.width = '40px';
profileImg.style.width = '34px';

const div = document.createElement('div')
div.classList.add('mobile-icons')

div.appendChild(cartImg)
div.appendChild(profileImg)

headerMobile.appendChild(div)

headerMobile.addEventListener('click', function(event) {
  if (event.target.classList.contains('burger')) {
    openSidebar();
  }
});