  // const modalWrapOpen = function(e) {
  //   const dataModalOpen = e.currentTarget.dataset.modalOpen;
  //   Array.from(document.querySelectorAll('.popup')).forEach((e, i) => {
  //     if(e.getAttribute('data-modal') === dataModalOpen){
  //       e.classList.toggle('is-show');
  //       document.querySelector("画像のCSSセレクタ").src = "写真のURL";
  //     }
  //   })
  // }

  const modalWrapOpen = function(e) {
    document.querySelector('#modal-img').src = e.currentTarget.getAttribute('data-image-url');
    document.querySelector('#modal-title').innerText = e.currentTarget.getAttribute('data-title');
    document.querySelector('.popup').classList.toggle('is-show')
  }
  
  Array.from(document.querySelectorAll('.default-content')).forEach((modalOpenElement) => {
    modalOpenElement.addEventListener('click', modalWrapOpen);
  })
  
  const modalCloseAction = function(e) {
    const targetModal = e.currentTarget.closest('.popup');
    targetModal.classList.toggle('is-show')
  };
  
  Array.from(document.querySelectorAll('.close-btn, .black-background')).forEach((modalCloseElement) => {
    modalCloseElement.addEventListener('click', modalCloseAction)
  })
