class BeforeButton extends HTMLElement {
  constructor() {
    super();
    const photoId = this.getAttribute('data-photo-id')
    const posX = this.getAttribute('data-pos-x')
    const zoom = this.getAttribute('data-zoom')

    const div = document.createElement('div')
    div.classList.add('before')
    const picture = document.createElement('picture')
    const source = document.createElement('source')
    source.srcset = `/photos/${photoId}.webp`
    source.type = 'image/webp'
    const img = document.createElement('img')
    img.setAttribute('data-src', `/photos/${photoId}.jpg`)
    img.classList.add('lazyload')
    img.style.objectPosition = `${posX}%`
    img.style.transform = `scale(${zoom})`

    picture.appendChild(source)
    picture.appendChild(img)
    div.appendChild(picture)
    this.appendChild(div)
  }
}

customElements.define("before-button", BeforeButton);
