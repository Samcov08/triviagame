//values 
var counter = 30;
var currentQuestion = 0;
var score = 0;
var timer;

//questions
var testQuestions = [{
        question: "What is my favorite food?",
        choices: ["pizza", "sea food", "ice cream", "mexican food"],
        correctAnswer: "mexican food"
    },
    {
        question: "What is my go-to drink?",
        choices: ["water", "beer", "dr.pepper", "mixed drink"],
        correctAnswer: "dr.pepper"
    },

    {
        question: "What is my favorite hobby?",
        choices: ["camping", "kayaking", "swimming", "watching movies"],
        correctAnswer: "camping"
    },
    {
        question: "What is my favorite sport?",
        choices: ["football", "baseball", "hockey", "water polo"],
        correctAnswer: "hockey"
    }
];


function timeUp() {
    clearInterval();
}

//timer count down from 30-0
function countDown() {
    counter--;
    $("#timer").html("Timer:" + counter);
    if (counter === 0) {
        timeUp();
    }
}


//questions and chioces displayed together
//starts with first question
function startQuestion() {
    counter = 30;
    timer = setInterval(countDown, 1000);
    //console.log("running startquestion");
    var questions = testQuestions[currentQuestion].question;
    var choices = testQuestions[currentQuestion].choices;
    $("#timer").html("Timer:" + counter);
    $("#game").html(`<h4> ${questions} </h4>
${userChoices(choices)}`);
}

$(".btn").on("click", startQuestion);



function userChoices(choices) {
    var result = "";
    for (let i = 0; i < choices.length; i++);
    result = `<p class= choices data-answer="${choices[i]}">${choices[i]}</p>`
    return result;
}

$(".btn").on("click", startQuestion);