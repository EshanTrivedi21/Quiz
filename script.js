"use-strict";

const init = function() {
    document.querySelector(".start-btn").classList.remove("hidden"); 
    document.querySelector(".info-box").classList.add("hidden");
    document.querySelector(".quiz-box").classList.add("hidden")
    document.querySelector(".result-box").classList.add("hidden");
}

const startQuiz = function() {
    document.querySelector(".start-btn").classList.add("hidden"); 
    document.querySelector(".info-box").classList.remove("hidden");
}

const continueQuiz = function() {
    document.querySelector(".info-box").classList.add("hidden");
    document.querySelector(".quiz-box").classList.remove("hidden")
}

const replayQuiz = function() {
    document.querySelector(".start-btn").classList.add("hidden"); 
    document.querySelector(".info-box").classList.remove("hidden");
    document.querySelector(".quiz-box").classList.add("hidden")
    document.querySelector(".result-box").classList.add("hidden");
}

const resultQuiz = function() {
    document.querySelector(".quiz-box").classList.add("hidden")
    document.querySelector(".result-box").classList.remove("hidden");
}

document.querySelector(".start-btn").addEventListener(
    "click" , startQuiz
)

document.querySelector(".quit").addEventListener(
    "click" , init
)

document.querySelector(".restart").addEventListener(
    "click" , continueQuiz
)

document.querySelector(".exit").addEventListener(
    "click" , init
)

document.querySelector(".next").addEventListener(
    "click" , resultQuiz
)


document.querySelector(".end").addEventListener(
    "click" , init
)

document.querySelector(".replay").addEventListener(
    "click" , replayQuiz
)

