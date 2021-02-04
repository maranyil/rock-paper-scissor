const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Starting the game with this big function
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const pHand = document.querySelector('.player-hand');
        const cHand = document.querySelector('.computer-hand');
        //Computer options
        const cOptions = ['rock', 'paper', 'scissors'];

        //Normal function is used for has correct link to -this-
        options.forEach(option => {
            option.addEventListener('click', function(){
                const cNumber = Math.floor(Math.random() * 3);
                const cChoice = cOptions[cNumber];
                console.log(cChoice);   
            });
        });  
    };

    //Calling inner functions
    startGame();
    playMatch();

};

//start the game
game();