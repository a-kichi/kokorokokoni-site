class BeforeButton extends HTMLElement {
  constructor() {
    super();

    const photoId = this.getAttribute('data-photo-id')
    const img = document.createElement('img')
    img.src = `/img/before-img/bfr-${photoId}.png`
    this.appendChild(img)
  }
}

customElements.define("before-button", BeforeButton);
