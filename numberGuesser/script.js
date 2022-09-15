let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9)
};

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    //most likely can clean this code up more...
    if (Math.abs(targetNumber - computerGuess) === Math.abs(targetNumber - userGuess)) {
        return true;
    } else if (Math.abs(targetNumber - computerGuess) < Math.abs(targetNumber - userGuess)) {
        return false;
    } else if (Math.abs(targetNumber - computerGuess) > Math.abs(targetNumber - userGuess)) {
        return true;
    }

};

const updateScore = str => {
    //Might have to remove the return will check back letter
    switch (str) {
        case 'human':
            return humanScore += 1;
            break;
        case 'computer':
            return computerScore += 1;
            break;
        default:
            return 'error';
    }
};

const advanceRound = currentRoundNumber => {
    return currentRoundNumber += 1;
}
