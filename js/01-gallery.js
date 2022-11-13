

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

galleryContainer.addEventListener('click', onClickModalWindow);

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
    alt="${description}" 
    loading="lazy"
    />
  </a>
</div>
`
        })
        .join('');
};


function createModalWindow(imageAdress) {
  
    window.instance = basicLightbox.create(
    `
    <img src="${imageAdress}"/>
    `,
    {
      onShow: () => 
        window.addEventListener('keydown', onCloseModalWindowByEsc),
      onClose: () => 
        window.removeEventListener('keydown', onCloseModalWindowByEsc),
    }
  );
  return instance;
}

function onClickModalWindow(event) {
event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const origImages = event.target.dataset.source;
  createModalWindow(origImages).show();
};

function onCloseModalWindowByEsc(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
};