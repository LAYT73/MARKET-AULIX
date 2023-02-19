const socialsNode = document.querySelector('.socials')

const socials = ['facebook', 'instagram', 'linkedin', 'twitter', 'youtube'];
const pathToSocial = 'img/icons/socials/'

for (let i of socials) {
  socialsNode.innerHTML += `
    <img src='${pathToSocial}${i}.svg' width='40px' class='soc-svg'>
  `
}

const currentLang = document.querySelector('.current-lang');
const dropdownContent = document.querySelector('.language-dropdown_content');

currentLang.addEventListener('mouseover', () => {
  dropdownContent.classList.add('show');
});

document.addEventListener('mouseover', (e) => {
  if (!e.target.closest('.footer__bottom_lang')) {
    dropdownContent.classList.remove('show');
  }
});

const footer__cols = document.querySelector('.footer__cols')

const col = `
<div class="footer__cols_col">
  <h4>About</h4>
  <span>About Us</span>
  <span>Find store</span>
  <span>Categories</span>
  <span>Blogs</span>
</div>
`
for (let i = 0; i < 4; i++) {
  footer__cols.innerHTML += col;  
}