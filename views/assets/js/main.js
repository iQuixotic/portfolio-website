
  

  const project = {
    carouselHref: [1, 2, 3],
    title: ['Zenith Holdings', 'Avatar Cards', 'Cat Clicker'],
    imgLoc: [`./assets/imgs/zenithScreenShot.png`, './assets/imgs/cards.png', 
    './assets/imgs/catGif9.png'],
    projectHref: ['https://bank-manager-app-9485.herokuapp.com/',
    'https://avatar-card-tribute-game-89458.herokuapp.com/', 
    'https://iquixotic.github.io/cat-clicker-game/'],
    description: [`From the main page (accounts), you can see all of the accounts 
    currently available for manipulation. To credit an account, type a value into the 
    pay to/from box and an ammount in either the 'Add Funds' or 'Subtract Funds' input. 
    By clicking on the button corresponding to the input, you can add or subtract funds 
    accordingly. Clicking on an 'X' will remove an account and all of its contents 
    from the database. \n
    If you click a name, you will be taken to an individual's account listing all 
    of the credits and debits. To delete and entry, simply click the red 'X' at the 
    end of the credit/debit line. Upon deletion, the account balance will be updated accordingly.   \n 
    On the 'New' page, you can create a new account that is immediately available for manipulation.`, 
    `The goal of this game is to click each of the 12 cards once.`, `This is a mobile-responsive random number 
    game made using javascript and jQuery.`]
  }
         
  // let title = document.getElementById('proj-title');
  // let carImg = document.getElementById('proj-title');
  // let description = document.getElementById('proj-description');

  console.log('hey beautiful')

  $(document).ready(() => {
   
    
    editDivs = (arg) => {
      console.log(parseInt(arg))
    }
    
    
    
    for(let i=0; i<project.carouselHref.length; i++) {

      let title = document.createElement('div');
      $('.mobile-app').append(title);
      $(title).attr('id', 'proj-title');
      $(title).append(`<h3>${project.title[i]}</h3>`);

      let portfolioCarousel = document.createElement('div');
      $('.mobile-app').append(portfolioCarousel);
      $(portfolioCarousel).attr('id', 'Portfolio-carousel');
      $(portfolioCarousel).attr('class', 'carousel');
      $(portfolioCarousel).append(`
      <a class='carousel-item' href='${project.projectHref[i]}'>
      <img src='${project.imgLoc[i]}'/></a>`);

      let portfolioFull = document.createElement('div');
      $('.mobile-app').append(portfolioFull);
      $(portfolioFull).attr('id', 'Portfolio-full');
      $(portfolioFull).append(`
      <a class='carousel-item' href='${project.projectHref[i]}'>
      <img src='${project.imgLoc[i]}'/></a>`);

    }

    

    $('.carousel').carousel({
      shift: 30,
  });

})
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });

     $( document ).ready(() => {
        $(".carousel").carousel({onCycleTo: (slide) => { editDivs(slide.target); }});
      });
  // $("#favs").append(`<div class='container'><div class='col-md-9'><div class='card'><div class='card-body'>
  // <h3 class='card-title'>${favDATA[1][i].title}</h3><p class='card-text'>
  // ${favDATA[1][i].summary}</p></div></div>   <div id='comments-here${favDATA[1][i]._id}'></div>`)
  // i++;
  