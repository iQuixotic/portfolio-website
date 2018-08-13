console.log('hey beautiful')

  $(document).ready(function(){
    $('.carousel').carousel({
        shift: 30,
        
    });
  });

  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });

  const project = {
    title: [],
    img: [],
    href: [],
    description: []
  }
        
  let title = document.getElementById('proj-title');
  let carouselItem = document.getElementById('carousel-item')
  let description = document.getElementById('proj-description');