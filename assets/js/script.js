const images = document.querySelectorAll('img')
images.forEach((item)=>{
    item.setAttribute('draggable', 'false')
})

$(document).ready(function () {
    const $bannerSlider = $('.banner__slider')
    $bannerSlider.on('init reInit', function(event, slick, currentSlide, nextSlide) {   
        $(slick.$dots).appendTo('[data-banner-slider-nav]');
    })
    $bannerSlider.slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        dots: true,
        customPaging: function(slider, i) { 
            return `<button class="slick-dots__btn"><img class="slick-dots__btn__image" src="${$(slider.$slides[i]).find('.banner__slide__image').attr('src')}" alt="product" height="75" loading="lazy"></button>`;
        },
        fade: true,
        cssEase: 'ease',
    })
})