// function popupImage() {
//     var popup = document.getElementById('js-popup');
//     if(!popup) return;
  
//     var blackBg = document.getElementById('js-black-bg');
//     var closeBtn = document.getElementById('js-close-btn');
//     var showBtn = document.getElementById('js-show-popup');
  
//     closePopUp(blackBg);
//     closePopUp(closeBtn);
//     closePopUp(showBtn);
//     function closePopUp(elem) {
//       if(!elem) return;
//       elem.addEventListener('click', function() {
//         popup.classList.toggle('is-show');
//       });
//     }
//   }
//   popupImage();
  // https://tech-dig.jp/js-modal/

  const modalWrapOpen = function(e) {
    const dataModalOpen = e.currentTarget.dataset.modalOpen;
    Array.from(document.querySelectorAll('.popup')).forEach((e, i) => {
      if(e.getAttribute('data-modal') === dataModalOpen){
        e.classList.toggle('is-show');
      }
    })
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