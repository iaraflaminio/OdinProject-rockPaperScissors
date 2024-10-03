let humanScore = 0
let computerScore = 0

const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt("Enter you choice, Human: ")
    return choice ? choice.toLowerCase() : ""
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
