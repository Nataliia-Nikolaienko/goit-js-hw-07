// galleryItems масив обєктів

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

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



function onGalleryContainerClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    
    console.log(evt.target.dataset.source);

  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}"/>
    `)
  instance.show();
}




// Пробувала ще так але десь роблю помилку і модалка не відкривається і не закривається


// function onGalleryContainerClick(evt) {
//     evt.preventDefault();

//     if (!evt.target.classList.contains('gallery__image')) {
//         return;
//     }
    
//     console.log(evt.target.dataset.source);

//   const instance = basicLightbox.create(
//     `
//     <img src="${evt.target.dataset.source}"/>
//     `,
//     {
//       onShow: () => 
//         window.addEventListener('keydown', onCloseModalWindowByEsc),
//       onClose: () => 
//         window.removeEventListener('keydown', onCloseModalWindowByEsc),
//     }
//   );
//   return instance;
// }


// const onCloseModalWindowByEsc = (event) => {
//   if (event.code === 'Escape') {
//     window.removeEventListener('keydown', onGalleryContainerClick)
//   }
// }
