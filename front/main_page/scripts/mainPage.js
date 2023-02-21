const sectionMainMenu = document.querySelector('.section-main__menu')

const menuItems = ['Automobiles', 'Clothes and wear', 'Home interiors', 'Computer and tech', 'Tools, equipments', 'Sports and outdoor', 'Animal and pets', 'Machinery tools', 'More category']

{/* <li class="section-main__menu_item">Automobiles</li> */}

for (let i of menuItems) {
  const li = document.createElement('li');
  li.classList.add('section-main__menu_item');
  li.textContent = i;
  sectionMainMenu.appendChild(li);
}

const countdown = document.querySelector('.countdown__time')

for (let i = 0; i < 4; i++) {
  const div = document.createElement('div');
  div.classList.add('countdown__time_time');
  div.classList.add('countdown__time_days');
  const b = document.createElement('b');
  b.innerText = '04';
  const span = document.createElement('span');
  span.innerText = 'days';
  div.appendChild(b)
  div.appendChild(span)

  countdown.appendChild(div)
}


const cards = document.querySelector('.section-sale__cards')
const pathToImg = './img/main_page/sale/';
const imgs = ['camera', 'headphones', 'laptop', 'phone', 'watch', 'laptop', 'phone', 'watch'];

for (let i of imgs) {
  const div = document.createElement('div');
  div.classList.add('section-sale__cards_card');
  const divImg = document.createElement('div');
  divImg.classList.add('divImg');
  const img = document.createElement('img');
  img.src = `${pathToImg}${i}.png`;
  img.style.width = '100px'
  const h3 = document.createElement('h3');
  h3.innerText = 'GoPro cameras';
  const span = document.createElement('span')
  span.classList.add('sale')
  span.innerText = '-25%';
  divImg.appendChild(img)
  div.appendChild(divImg)
  div.appendChild(h3)
  div.appendChild(span)
  cards.appendChild(div)  
}

const cardsContainer = document.querySelector('.section-sale__cards');

/* Обработчик события wheel для прокрутки колесиком мыши */
cardsContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  cardsContainer.scrollLeft += event.deltaY;
});