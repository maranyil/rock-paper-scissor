const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Starting the game with this function
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
    const hands = document.querySelectorAll('.hands img');

    hands.forEach((hand) => {
      hand.addEventListener('animationend', function () {
        hand.style.animation = '';
      });
    });
    //Computer options
    const cOptions = ['rock', 'paper', 'scissors'];

    //Normal function is used for has correct link to -this-
    options.forEach((option) => {
      option.addEventListener('click', function () {
        const cNumber = Math.floor(Math.random() * 3);
        const cChoice = cOptions[cNumber];

        setTimeout(() => {
          // Compare hands
          compareHands(this.textContent, cChoice);

          // Update images
          pHand.src = `./assets/${this.textContent}.png`;
          cHand.src = `./assets/${cChoice}.png`;
        }, 2000);
        // Animation
        pHand.style.animation = 'shakePlayer 2s ease';
        cHand.style.animation = 'shakeComputer 2s ease';
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const compuScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    compuScore.textContent = cScore;
  };

  const compareHands = (pChoice, cChoice) => {
    const winner = document.querySelector('.winner');
    // If tie
    if (pChoice === cChoice) {
      winner.textContent = "It's a tie";
      return;
    }
    // If rock
    if (pChoice === 'rock') {
      if (cChoice === 'scissors') {
        winner.textContent = 'You Win!';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer Wins!';
        cScore++;
        updateScore();
        return;
      }
    }
    // If paper
    if (pChoice === 'paper') {
      if (cChoice === 'scissors') {
        winner.textContent = 'Computer Wins!';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'You Win!';
        pScore++;
        updateScore();
        return;
      }
    }
    // If scissors
    if (pChoice === 'scissors') {
      if (cChoice === 'rock') {
        winner.textContent = 'Computer Wins!';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'You Win!';
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Calling inner functions
  startGame();
  playMatch();
};

//start the game
game();
