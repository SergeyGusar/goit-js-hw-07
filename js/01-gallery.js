import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const containerGallery = document.querySelector(".gallery");
containerGallery.addEventListener("click", Onclick);
function Onclick(evt) {
  blockDefaultSettings(evt);
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const createModal =
    basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">
 `);
  createModal.show();

  containerGallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      createModal.close();
    }
  });
}

function blockDefaultSettings(evt) {
  evt.preventDefault();
}

containerGallery.classList.add(".gallery");
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
