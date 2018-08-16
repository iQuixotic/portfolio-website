const titleFull = $('#proj-title-full-size')
const descFull = $('#proj-description-full-size')

$(document).ready(() => {

    $('.container').css('height', window.innerHeight);
    
    $('#Skills_about').html(about);
    $('#Skills_skills').html(skills);

    // changes the content of title and description based on image shown in carousel
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
