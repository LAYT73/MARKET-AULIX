const divSidebar = document.createElement('div');
divSidebar.classList.add('sidebar');
const divSidebarHeader = document.createElement('div');
divSidebarHeader.classList.add('sidebar__header');
const imgSidebarAvatar = document.createElement('img');
imgSidebarAvatar.src = 'img/avatar.svg';
imgSidebarAvatar.classList.add('avatar');
const divText = document.createElement('div');
const anchorSignIn = document.createElement('a')
anchorSignIn.href = '#';
anchorSignIn.classList.add('sign-in');
anchorSignIn.innerText = 'Sign in';
const anchorReg = document.createElement('a')
anchorReg.href = '#';
anchorReg.classList.add('register');
anchorReg.innerText = 'Register';
const divSidebarNav = document.createElement('div');
divSidebarNav.classList.add('sidebar__nav')

divText.appendChild(anchorSignIn)
divText.innerHTML += ' | ';
divText.appendChild(anchorReg)

divSidebarHeader.appendChild(imgSidebarAvatar);
divSidebarHeader.appendChild(divText);

divSidebar.appendChild(divSidebarHeader);
divSidebar.appendChild(divSidebarNav);

divSidebar.style.display = 'none'

document.body.appendChild(divSidebar)


const modalContent = document.querySelector('.sidebar');
const body = document.querySelector('body');


let touchstartX = 0;
let touchendX = 0;

window.addEventListener('touchstart', function(event) {
  touchstartX = event.changedTouches[0].screenX;
});

window.addEventListener('touchend', function(event) {
  touchendX = event.changedTouches[0].screenX;


  if (touchendX < touchstartX && Math.abs(touchendX-touchstartX) > 50) {
    closeModal();
  }
});

const a = () => { document.addEventListener('click', (e) => {
  if (e.target === body) {
    closeModalTap()
  }
})}

function closeModal() {
  modalContent.style.transition = 'transform .1s linear'
  modalContent.style.transform = `translateX(-100%)`;
  body.style.backgroundColor = '#fff'
  const close = () => {
    modalContent.style.display = 'none';
  }
  setTimeout(close, 1000);
  header.style.display = 'flex';
  document.removeEventListener('click', a);
}

function closeModalTap() {
  body.style.backgroundColor = '#fff'
  modalContent.style.display = 'none';
  header.style.display = 'flex';
  document.removeEventListener('click', a);
}

function openSidebar() {
  console.log(123)
  document.addEventListener('click', a);
  modalContent.style.transform = `translateX(0)`;
  modalContent.style.display = 'block';
  header.style.display = 'none';
  body.style.backgroundColor = '#636363'
}