"use-strict";

const startButton = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const quizBox = document.querySelector(".quiz-box")

const quitButton = document.querySelector(".buttons .quit");
const continueButton = document.querySelector(".buttons .restart");

const questionText = document.querySelector(".que-text span");

const option_1 = document.querySelector(".option_1 span");
const option_2 = document.querySelector(".option_2 span");
const option_3 = document.querySelector(".option_3 span");
const option_4 = document.querySelector(".option_4 span");

startButton.onclick = () => {
    startButton.classList.add("hidden");
    infoBox.classList.remove("hidden");
}

quitButton.onclick = () => {
    infoBox.classList.add("hidden");
    startButton.classList.remove("hidden");
}

continueButton.onclick = () => {
    infoBox.classList.add("hidden");
    startButton.classList.add("hidden");
    quizBox.classList.remove("hidden")
}