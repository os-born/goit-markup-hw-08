(() => {
  const refs = {
    openModalBtn: document.querySelector('#m-modal-open'),
    closeModalBtn: document.querySelector('#m-modal-close'),
    modal: document.querySelector('#m-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();