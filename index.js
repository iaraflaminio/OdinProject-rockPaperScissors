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
}

const winningCases = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}

