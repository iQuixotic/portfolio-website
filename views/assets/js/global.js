    // for materialize modal
$(document).ready(function(){
   $('.modal').modal();
});

//   for materialize tabs (inside modal)
$(document).ready(function(){
   $('.tabs').tabs();
});

// for indenting paragraphs
const indent = `\u00A0\u00A0\u00A0`

// iterator
let i;

// reuse pieces of projects as necessary on mobile and global
const project = {
    carouselHref: [1, 2, 3],
    title: ['Zenith Holdings', 'Avatar Cards', 'Cat Clicker'],
    imgLoc: [`./assets/imgs/zenithScreenShot.png`, './assets/imgs/cards.png',
        './assets/imgs/catGif9.png'],
    projectHref: ['https://bank-manager-app-9485.herokuapp.com/',
        'https://avatar-card-tribute-game-89458.herokuapp.com/',
        'https://iquixotic.github.io/cat-clicker-game/'],
    description: [`<p> ${indent} From the main page, you can see all of the accounts 
    currently available for manipulation. To credit an account, type a value into the 
    pay to/from box and an ammount in either the 'Add Funds' or 'Subtract Funds' input. 
    By clicking on the button corresponding to the input, you can add or subtract funds 
    accordingly. Clicking on an 'X' will remove an account and all of its contents 
    from the database.</p> 
    <p> ${indent} If you click a name, you will be taken to an individual's account listing all 
    of the credits and debits. To delete and entry, simply click the red 'X' at the 
    end of the credit/debit line. Upon deletion, the account balance will be updated accordingly.</p>
    <p>  ${indent} From the "New" page, you can create a new account that is immediately available for manipulation.</p>`,
        `<p> ${indent} I created this project using create-react-app. The goal of this game is to click
        each of the cards once. It features a win state and a loss state. It is fully mobile-responsive.
        On the back-end, I built an express server so that it may be hosted on heroku. And if you are wondering, 
        already, the characters are from Avatar: The Last Airbender.</p>`, `<p> ${indent} This is a mobile-responsive random number 
    game made using javascript and jQuery. At the beginning of each iteration, each cat picture at the bottom 
    of the page is assigned a number (randomly generated) and  the player is given a target (randomly generated). By clicking
    the pictures, the value held will increase. The goal is to get to the target number without going over.</p>`]
}

// make commas appear more prominent by using a differnt font and font-size
const c = `<span class='commas'>,</span>`

// text for about me 
const about = `<p>${indent}I am open-minded. I sincerely love silly puns and bad jokes. I love learning
 new skills. I find simple sentence structure captivating. </p>
 <p>${indent}About 1 year ago${c} I started coding in javascript. 
 In March (2018)${c} my pursuit blossomed into something bigger. I left my day job
 to pursue a coding skillset full-time at the University of Central Florida 
 and haven't slowed since.</p> `;

// text for skills 
const skills = `HTML${c} CSS${c} Javascript${c} Git${c} Github${c}
API's${c} AJAX${c} Materialize${c} Bootstrap${c} JQuery${c}
React.js${c} Typescript${c} Node.js${c} MongoDB${c} MySQL${c}
Sequelize${c} Mongoose${c} Heroku${c} Amazon Web Services${c} and many more...`

// for saying hello
const welcome = `<h3 class='js-welcome'> Hello and Welcome !! I am Trey !! </h3>`;

// for display over skills
const skillsHeading = `<h3 class='js-skills'>Skills </h3>`;
