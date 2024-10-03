let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt("Enter you choice, Human: ")
    return choice ? choice.toLowerCase() : ""
}

console.log(getHumanChoice())