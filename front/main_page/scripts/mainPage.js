const sectionMainMenu = document.querySelector('.section-main__menu')

const menuItems = ['Automobiles', 'Clothes and wear', 'Home interiors', 'Computer and tech', 'Tools, equipments', 'Sports and outdoor', 'Animal and pets', 'Machinery tools', 'More category']

{/* <li class="section-main__menu_item">Automobiles</li> */}

for (let i of menuItems) {
  const li = document.createElement('li');
  li.classList.add('section-main__menu_item');
  li.textContent = i;
  sectionMainMenu.appendChild(li);
}