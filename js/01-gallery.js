import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

const greateGallery = greateGalaryMarkup(galleryItems)

gallery.addEventListener('click', onImageClick)

gallery.innerHTML = greateGallery

function greateGalaryMarkup (items){
    return items.map(item=> `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>` ).join('')
}
  
function onImageClick(e){
    e.preventDefault()

    if (e.target.nodeName !== 'IMG'){
             return
    }
    let imgOriginalUrl = e.target.dataset.source
   
    const instance = basicLightbox.create(`
    <img src="${imgOriginalUrl}">`)
    instance.show()
   
    gallery.addEventListener('keydown',  onKeyPress)

    function onKeyPress(e){
if(e.code==='Escape'){
               instance.close();
        gallery.removeEventListener('keydown',  onKeyPress)
    }
    }
}
