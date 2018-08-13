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
    title: ['Zenith Holdings', 'Avatar Cards', 'Cat Clicker'],
    img: ['../imgs/zenithScreenShot.png', '../imgs/cards.png', 
    '.../imgs/catGif9.png'],
    href: ['https://bank-manager-app-9485.herokuapp.com/',
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
        
  let title = document.getElementById('proj-title');
  let carouselItem = document.getElementById('carousel-item');
  let description = document.getElementById('proj-description');