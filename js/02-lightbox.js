import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryConteiner = document.querySelector('.gallery')

const createGallery = createGalleryMarkup(galleryItems)

galleryConteiner.innerHTML = createGallery

function createGalleryMarkup(items){
    return items.map((item) => `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>` ).join('')
}

let gallery = new SimpleLightbox('.gallery a', { 
    captionType: 'attr', 
    captionsData : 'alt',
    captionDelay: 250,
     
});
