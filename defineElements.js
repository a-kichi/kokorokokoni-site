class BeforeButton extends HTMLElement {
  constructor() {
    super();

    const photoId = this.getAttribute('data-photo-id')
    const picture = document.createElement('picture')
    const source = document.createElement('source')
    source.srcset = `/img/before-img/bfr-${photoId}.webp`
    source.type = 'image/webp'
    const img = document.createElement('img')
    img.src = `/img/before-img/bfr-${photoId}.png`

    picture.appendChild(source)
    picture.appendChild(img)
    this.appendChild(picture)
  }
}

customElements.define("before-button", BeforeButton);
