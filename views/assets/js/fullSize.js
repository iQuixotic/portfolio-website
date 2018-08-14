
console.log('hey from fullsize')

const titleFull = $('#proj-title-full-size')
const descFull = $('#proj-description-full-size')

$(document).ready(() => {

    editDivs = (arg) => {
        const slideNum = parseInt(arg) - 1;
        const titleFull = $('#proj-title-full-size')
        const descFull = $('#proj-description-full-size')
        console.log(slideNum)

        $(titleFull).html(project.title[slideNum])
        $(descFull).html(project.description[slideNum])
    }

    $('.carousel').carousel({
        shift: 30,
    });

})
$('.carousel.carousel-slider').carousel({
    fullWidth: true
});

$(document).ready(() => {
    $(".carousel").carousel({ onCycleTo: (slide) => { editDivs(slide.target); } });
});
