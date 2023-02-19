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