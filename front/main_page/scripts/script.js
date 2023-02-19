window.addEventListener('resize', () => {
  const media = window.matchMedia('(min-width: 769px)')
  if (media.matches) {
    modalContent.style.display = 'none';
    closeModal();
  }
})