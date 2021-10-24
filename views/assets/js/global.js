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

// make commas appear more prominent by using a differnt font and font-size
const c = `<span class='commas'>,</span>`

// iterator
let i;

// reuse pieces of projects as necessary on mobile and global
const project = {
    carouselHref: [1, 2, 3, 4, 5],
    title: ['Zenith Holdings', 'Avatar Cards', 'Cat Clicker', 'Picture Puzzles', "Lil' Libs"],
    imgLoc: [`./assets/imgs/zenithScreenShot.png`, './assets/imgs/cards.png',
        './assets/imgs/catGif9.png', './assets/imgs/picturePuzzles.png', './assets/imgs/lilLibs.png'],
    projectHref: ['https://github.com/iQuixotic/bank-app',
        'https://avatar-card-tribute-game-89458.herokuapp.com/',
        'https://iquixotic.github.io/cat-clicker-game/',
        'https://picture-puzzles.herokuapp.com/',
        'https://req-libs.herokuapp.com/',
          ],
    description: [`<p> ${indent} From the main page${c} you can see all of the accounts 
    currently available for manipulation. To credit an account${c} type a value into the 
    pay to/from box and an ammount in either the 'Add Funds' or 'Subtract Funds' input. 
    By clicking on the button corresponding to the input, you can add or subtract funds 
    accordingly. Clicking on an 'X' will remove an account and all of its contents 
    from the database.</p> 
    <p> ${indent} If you click a name${c} you will be taken to an individual's account listing all 
    of the credits and debits. To delete and entry${c} simply click the red 'X' at the 
    end of the credit/debit line. Upon deletion${c} the account balance will be updated accordingly.</p>
    <p>  ${indent} From the "New" page${c} you can create a new account that is immediately available for manipulation.</p>`,
        `<p> ${indent} I created this project using create-react-app. The goal of this game is to click
        each of the cards once. It features a win state and a loss state. It is fully mobile-responsive.
        On the back-end${c} I built an express server so that it may be hosted on heroku.
        The characters are from Avatar: The Last Airbender.</p>`,
    `<p> ${indent} This is a mobile-responsive random number 
    game made using javascript and jQuery. At the beginning of each iteration${c} each cat picture at the bottom 
    of the page is assigned a number (randomly generated) and  the player is given a target (randomly generated). By clicking
    the pictures${c} the value held will increase. The goal is to get to the target number without going over.</p>`,
    `<p> ${indent} This application allows the user to pick from several choices of puzzles to attempt. Upon
    picking a puzzle${c} that picture will be split into 16 slices. Each slice can be dragged to other slots 
    to swap places. The timer will start once the first piece is moved. Once you believe that all of the
    pieces are in the correct location${c} click on the CHECK button to see how you did. ENJOY !!</p>`,
    `<h4>GROUP PROJECT</h4> <p> ${indent} This is a Mad Libs inspired game in which the user picks from one of several categories. The user is
    then prompted for verbs${c} nouns${c} adverbs${c} etc. per needed within the story. The paragraph is then combined
    with the user's input and a story is shown to the user. Stories are saved automatically to the user's 
    profile. The user also has the option to add their own story to the database. This project's purpose was
    to${c} as a team${c} create a full stack application complete with an express router${c} a database${c} and polished UI.</p>`
    ]
}

// text for about me 
const about = `<p>${indent} In 2019, I started my coding career in Tampa, Florida with a Revature. For backend code, I used Java with Spring Boot and occasionally Nodejs. For front end, we used Reactjs with Redux. At my time here, I primarily contributed to a staging application. This application was used internally to keep track where various employees were located and what interviews would be scheduled with which employees.</p>
<p>${indent} After working for Revature for about 5 months, my contract was moved to Infosys where I have worked ever since. Infosys, like Revature, is a consultancy company, that deploys resources wherever they are needed. They consult for various companies, including many fortune 500 companies AT&T and Verizon where I have spent my time as an Infosys employee.</p>
<p>${indent} On my first project at Infosys, I used JSPs with Angularjs to build build portal pages for AT&T. During my second project (Also AT&T), I worked with a small team to migrate part of the comapany’s billing from Zuora to Salesforce. My primary responsibility during this time was working on the Orchestration server.</p>
<p>${indent} Around the beginning of 2020, I was offered an opportunity at Infosys to move to a Verizon account in Tampa, FL.  I started out working in Nodejs and Reactjs for a vendor portal team. This team was responsible for building out a Single Sign on that connected a Verizon user across multiple internal Verizon applications.</p>
<p>${indent} After only a couple months on this project, I was promoted to a Lead developer and moved to a new team within Verizon where I have been ever since. At my current position, my team works primarily  in Nodejs to develop applications for the benefit of network engineers. Our primary work has been build various interfaces and workflows to make it easier for a network engineer to manage multiple issues and/or upgrade needs for various 4g and 5g towers. We have also worked to automate several components of pushing new configurations to 5g towers in order to make this process quicker and easier for a network engineer to manage.</p>
`

// text for skills 
const skills = `HTML${c} CSS${c} Javascript${c} PHP ${c} ES6${c} Git${c} Github${c}
all of the API's${c} all of the AJAX${c} Materialize${c} Bootstrap${c} JQuery${c}
React.js${c} Vue${c} Typescript${c} Node.js${c} Express${c} MongoDB${c} MySQL${c}
Sequelize${c} Mongoose${c} Heroku${c} Amazon Web Services (EC2)${c} and many more...`

// for saying hello
const welcome = `<h3 class='js-welcome'>Welcome to My Page !! I am Trey !! </h3>`;

// for display over skills
const skillsHeading = `<h3 class='js-skills'>Skills </h3>`;
