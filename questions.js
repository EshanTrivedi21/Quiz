"use-strict";

fetch("https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple")

    .then(res => {
        return res.json();
    })

    .then(loadedQuestions => {
        console.log(loadedQuestions.results)
        loadedQuestions.results.map( loadedQuestion => {
            const formattedQuestion = {
                question: loadedQuestion.question
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];

            formattedQuestion.answer = Math.floor(Math.random()*3) + 1;
    
            answerChoices.splice(formattedQuestion.answer -1, 0, loadedQuestion.correct_answer);
            
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