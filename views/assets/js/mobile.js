$(document).ready(() => {

           
      $('#mobile-app').append(`<div class='about card'><p>${about}</p></div>`);
      $('#mobile-app').append(`<div class='skills card'><p>${skills}</p></div>`);
      $('#mobile-app').append(`<div class='spacer'></div>`); 
    
        for (i = 0; i < project.carouselHref.length; i++) {

            let title = document.createElement('div');
            $('#mobile-app').append(title);
            $(title).attr('id', 'proj-title');
            $(title).append(`<h3>${project.title[i]}</h3>`);

            let portfolioCarousel = document.createElement('div');
            $('#mobile-app').append(portfolioCarousel);
            $(portfolioCarousel).attr('id', 'Portfolio-carousel');
            $(portfolioCarousel).attr('class', 'carousel');
            $(portfolioCarousel).append(`
      <a class='carousel-item' href='${project.projectHref[i]}'>
      <img class='card' src='${project.imgLoc[i]}'/></a>`);

            let portfolioFull = document.createElement('div');
            $('#mobile-app').append(portfolioFull);
            $(portfolioFull).attr('id', 'Portfolio-full');
            $(portfolioFull).append(`
      <a class='carousel-item' href='${project.projectHref[i]}'>
      <img src='${project.imgLoc[i]}'/></a>`);
    }

})
