const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toogleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toogleModal);
modalBtnClose.addEventListener('click', toogleModal);