const imgGallerySlide = document.getElementById('img-gallery-slide');
const gallerySlide = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

let imgHTML = '';

for (let i = 0; i < gallerySlide.length; i++) {
    
    const imgGallery = gallerySlide[i];
    //console.log(imgGallery)
    let visibleElement ='';
    if (i == 0) {
        visibleElement = 'visible'
    } else {
        visibleElement ='';
    }
    
    imgHTML += `<img src="./img/${imgGallery}" class="slide ${visibleElement}" alt="image ">`;
}

imgGallerySlide.innerHTML = imgHTML;

