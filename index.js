let humanScore = 0
let computerScore = 0

const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

console.log(getComputerChoice())

function getHumanChoice() {
    let choice

    do {
        choice = prompt("Enter you choice, Human: ").toLowerCase()
        if (!choices.includes(choice)) {
           prompt("Invalid choice, please, try again human!")
        }
    } while (!choices.includes(choice))

    return choice
}

console.log(getHumanChoice())

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        return
    }

    const winningCases = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    }

    if (winningCases[humanChoice] === computerChoice) {
        humanScore++
        console.log(`You win, Human! ${humanChoice.charAt(0) + humanChoice.slice(1)} beats ${computerChoice}`)
    } else {
        computerScore++
        console.log(`You lose, Human! ${computerChoice.charAt(0) + computerChoice.slice(1)} beats ${humanChoice}`)
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`)
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }
}

playGame()

console.log(`Final Score: Human - ${humanScore}, Computer - ${computerScore}`)
if (humanScore > computerScore) {
    console.log("Congratulations, Human, you beat me!!!!")
} else if (computerScore > humanScore) {
    console.log("Computer wins, haha!")
} else {
    console.log("Oh, well... it's a tie... is that right?")
}
