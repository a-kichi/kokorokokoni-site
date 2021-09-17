window.$ = (s) => document.querySelector(s)

document.addEventListener("DOMContentLoaded", () => {
  // モーダルを開く
  document.querySelectorAll("before-button").forEach((e) => {
    e.addEventListener("click", (e) => {
      const photoId = e.currentTarget.getAttribute('data-photo-id');
      const work = works[photoId];

      $("#photo-img").src = `/photos/${photoId}.jpg`;
      $("#photo-img-webp").srcset = `/photos/${photoId}.webp`;
      $("#title").innerText = work?.title || "";
      $("#description").innerText = work?.description || "";
      $("#author").innerText = work?.author || "";
      $("#author-memo").innerText = work?.authorMemo || "";
      $("#modal").classList.toggle("is-show");
    })
  });
  
  // モーダルを閉じる
  document.querySelectorAll("#modal #close-btn, .black-background").forEach((e) => {
    e.addEventListener("click", (event) => {
      const targetModal = event.currentTarget.closest(".popup");
      targetModal.classList.toggle("is-show");
    });
  });
})
