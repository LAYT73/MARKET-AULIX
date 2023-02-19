const modalContent = document.querySelector('.sidebar');
const body = document.querySelector('body');


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

// Добавляем обработчик события клика на весь документ




function closeModal() {
  modalContent.style.transition = 'transform .1s linear'
  modalContent.style.transform = `translateX(-100%)`;
  body.style.backgroundColor = '#fff'
  const close = () => {
    modalContent.style.display = 'none';
  }
  setTimeout(close, 1000);
  header.style.display = 'flex';
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

function openSidebar() {
  modalContent.style.transform = `translateX(0)`;
  modalContent.style.display = 'block';
  header.style.display = 'none';
  body.style.backgroundColor = '#636363'
}


// добавляем обработчик клика на элемент body
