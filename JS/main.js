const gallerySlide = ['01.webp','02.webp','03.webp','04.webp','05.webp' ];



let imgHTML = '';
for (let i = 0; i < gallerySlide.length; i++) {
    const imgGallery = gallerySlide[i];
    imgHTML = `<img src="./img/${imgGallery}" class="slide" alt="image ${i}">`;
}

console.log(imgHTML);