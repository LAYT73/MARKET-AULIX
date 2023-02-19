const modalContent = document.querySelector('.sidebar');

let touchstartX = 0;
let touchendX = 0;

window.addEventListener('touchstart', function(event) {
  touchstartX = event.changedTouches[0].screenX;
});

window.addEventListener('touchend', function(event) {
  touchendX = event.changedTouches[0].screenX;


  if (touchendX < touchstartX) {
    closeModal();
  }
});

function closeModal() {
  modalContent.style.transition = 'transform .3s linear'
  modalContent.style.transform = 'translateX(-600px)';
  const close = () => {
    modalContent.style.display = 'none';
  }
  setTimeout(close, 1000);
}


const sidebarNav = document.querySelector('.sidebar__nav')

const images = ['home.svg', 'categories.svg', 'fav.svg', 'orders.svg', 'lang.svg', 'contact.svg', 'about.svg'];
const texts = ['Home', 'Categories', 'Favorites', 'My orders', 'English | USD', 'Contact us', 'About'];

const pathToImage = './img/icons/sidebar/'

for (let i in images) {
  const sidebarNavItem = document.createElement('div')
  sidebarNavItem.className = 'sidebar__nav_item';
  const img = document.createElement('img')
  img.src = pathToImage+images[i];
  img.style.width = '35px'
  const text = document.createElement('span');
  text.innerText = texts[i];
  sidebarNavItem.appendChild(img);
  sidebarNavItem.appendChild(text);
  if (i == 4) {
    const div = document.createElement('div');
    div.style.borderBottom = '1px solid #DEE2E7';
    div.style.width = '95%';
    div.style.margin = '0, auto';
    div.style.marginBottom = '30px'
    div.style.marginTop = '10px'
    sidebarNav.appendChild(div)
  }
  sidebarNav.appendChild(sidebarNavItem)
}

const headerMobile = document.querySelector('.header__mobile')

const burgerImg = document.createElement('img')
burgerImg.src = './img/icons/mobile-header/burger.svg';
burgerImg.style.width = '30px'

headerMobile.appendChild(burgerImg)

headerMobile.innerHTML += `
<a href="#" class="header__mobile__logo">
<div>
    <img src='img/logo.svg' alt="" width="150px">
</div>
</a>
`

const cartImg = document.createElement('img')
const profileImg = document.createElement('img')

cartImg.src = './img/icons/mobile-header/cart.svg';
profileImg.src = './img/icons/mobile-header/profile.svg';

cartImg.style.width = '30px';
profileImg.style.width = '24px';

headerMobile.appendChild(cartImg)
headerMobile.appendChild(profileImg)
