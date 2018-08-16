const titleFull = $('#Proj_title-fs')
const descFull = $('#Proj_description-fs')

$(document).ready(() => {

    // $('.container').css('height', window.innerHeight);
    
    $('#about-js').html(about);
    $('#skills-js').html(skills);

    // changes the content of title and description based on image shown in carousel
    editDivs = (arg) => {
        const slideNum = parseInt(arg) - 1;
        const titleFull = $('#Proj_title-fs')
        const descFull = $('#Proj_desc-fs')
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
