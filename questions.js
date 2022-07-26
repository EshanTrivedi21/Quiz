"use-strict";

fetch("https://the-trivia-api.com/api/questions?categories=science,geography,history,sport_and_leisure&limit=10&region=IN&difficulty=easy")

    .then(res => {
        return res.json();
    })

    .then(loadedQuestions => {
        console.log(loadedQuestions)
        loadedQuestions.map(loadedQuestion => {
            const formattedQuestion = {
                question: loadedQuestion.question
            };

            const answerChoices = [...loadedQuestion.incorrectAnswers];

            formattedQuestion.answer = Math.floor(Math.random()*3) + 1;
    
            answerChoices.splice(formattedQuestion.answer -1, 0, loadedQuestion.correctAnswer);
            
            answerChoices.forEach((choice, index) => {
                formattedQuestion["choice" + (index + 1)] = choice;
            })

            questionText.innerHTML = formattedQuestion.question;

            option_1.innerHTML = answerChoices[0];
            option_2.innerHTML = answerChoices[1];
            option_3.innerHTML = answerChoices[2];
            option_4.innerHTML = answerChoices[3];

            return formattedQuestion
        })

    })

    .catch(err => {
        console.error(err)
    })