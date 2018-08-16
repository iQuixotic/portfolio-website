$(document).ready(() => {

      $('#mobile-app').append(welcome);
      $('#mobile-app').append(`<div class='About_about card'><p>${about}</p></div>`);
      $('#mobile-app').append(skillsHeading);
      $('#mobile-app').append(`<div class='About_skills card'><p>${skills}</p></div>`);
      $('#mobile-app').append(`<div class='spacer'></div>`); 
    
        for (i = 0; i < project.carouselHref.length; i++) {

            let title = document.createElement('div');
            $('#mobile-app').append(title);
            $(title).attr('id', 'Proj_title-mobile');
            $(title).append(`<h3>${project.title[i]}</h3>`);

            let portfolioCarousel = document.createElement('div');
            $('#mobile-app').append(portfolioCarousel);
            $(portfolioCarousel).attr('id', 'Carousel-js');
            $(portfolioCarousel).attr('class', 'carousel');
            $(portfolioCarousel).append(`
      <a class='carousel-item' href='${project.projectHref[i]}'>
      <img class='card' src='${project.imgLoc[i]}'/></a>`);

            let portfolioFull = document.createElement('div');
            $('#mobile-app').append(portfolioFull);
            $(portfolioFull).attr('id', 'Proj_container-fs');
            $(portfolioFull).append(`
      <a class='carousel-item' href='${project.projectHref[i]}'>
      <img src='${project.imgLoc[i]}'/></a>`);
    }

})
