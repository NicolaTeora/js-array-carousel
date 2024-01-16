const imgGallerySlide = document.getElementById('img-gallery-slide');
const gallerySlide = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
const goUp = document.querySelector('.img_up');
const goDown = document.querySelector('.img_down');

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

slideMoment = 0;
goDown.addEventListener('click', function(){
    //recupero
    const imgsTotal = document.getElementsByClassName('slide');
    //rimuovo classe visible
    const imgOld = imgsTotal[slideMoment];
    imgOld.classList.remove('visible');
    //incremento o riazzero
    if (slideMoment >= imgsTotal.length -1) {
        slideMoment = 0;
    } else {
        slideMoment++;
    }
    //assegno classe visible
    const nextImg = imgsTotal[slideMoment];
    nextImg.classList.add('visible');   
})

//slideMoment = galleySlide.lenght
goUp.addEventListener('click', function() {
    //recupero
    const imgsTotal = document.getElementsByClassName('slide');
    //rimuovo classe visible
    const imgOld = imgsTotal[slideMoment];
    imgOld.classList.remove('visible');
    //decremento o riparto dal fondo
    if () {
        
    } else {
        slideMoment--;
    }
    //assegno classe visible
    const nextImg = imgsTotal[slideMoment];
    nextImg.classList.add('visible');
})