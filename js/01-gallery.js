import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const containerGallery = document.querySelector(".gallery");

const listGalleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `
    <div class="gallery__item">
    <a class="gallery__link" 
       href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>
    `
    )
    .join("");
}
containerGallery.innerHTML = listGalleryMarkup;

containerGallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const createModal =
    basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">
 `);
  createModal.show();

 document.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      createModal.close();  
    }
  });

  onShow: (instance) => {
    window.addEventListener("keydown", onClick);
  };
  onClose: (instrance) => {
    window.removeEventListener('keydown', onClick);
  }
} 





