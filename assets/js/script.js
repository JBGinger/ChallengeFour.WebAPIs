const startBtn = document.getElementById("start-button");
startBtn.addEventListener('click', StartQuiz);
startBtn.addEventListener('click', Timer);

const submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener('click', DisplayHighScores);
submitBtn.addEventListener('click', UserSubmit);

const goBackBtn = document.getElementById("back-button");
goBackBtn.addEventListener('click', RestartQuiz);

var userInitials = document.getElementById("initials");
var clock = document.getElementById("clock");

const A1Button = document.getElementById("Answer1");
A1Button.addEventListener('click', Answer1);
const A2Button = document.getElementById("Answer2");
A2Button.addEventListener('click', Answer2);
const A3Button = document.getElementById("Answer3");
A3Button.addEventListener('click', Answer3);
const A4Button = document.getElementById("Answer4");
A4Button.addEventListener('click', Answer4);

const startPage = document.getElementById("start-page");
const questionPage = document.getElementById("question-page");
const resultsPage = document.getElementById("results-page");
const highScorePage = document.getElementById("high-score-page");

const questionLabel = document.getElementById("question");
const answerResult = document.getElementById("answer-result");
const finalScore = document.getElementById('display-final-score');
const highScores = document.getElementById('high-scores');
const timeDisplay = document.getElementById('time-left');
const clearScoresButton = document.getElementById('high-scores');
clearScoresButton.addEventListener('click', ClearHighScores);

var currentQuestion = 0;
var numQuestions = 0;
var correctAnswers = 0;
var timer;

var highScoresArray = [];

function StartQuiz() {
    currentQuestion = 0;
    timeDisplay.classList.remove('hidden');
    startPage.classList.add('hidden');
    questionPage.classList.remove('hidden');
    questionLabel.innerHTML = questions[currentQuestion].question;
    A1Button.innerHTML = questions[currentQuestion].answers[0].text;
    A2Button.innerHTML = questions[currentQuestion].answers[1].text;
    A3Button.innerHTML = questions[currentQuestion].answers[2].text;
    A4Button.innerHTML = questions[currentQuestion].answers[3].text;
    numQuestions = questions.length;
}

function Timer(){
    var sec = 60;
    var timer = setInterval(function(){
        clock.innerHTML=''+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function UserSubmit() {
    var result = userInitials.textContent + " " + finalScore.textContent;
    highScoresArray.push(result);
    return result;
}

function EndQuiz() {
    console.log("Quiz ended");
    timeDisplay.classList.add('hidden');
    questionPage.classList.add('hidden');
    resultsPage.classList.remove('hidden');
    finalScore.innerHTML = "Your final score is: " + clock.textContent;
    clearInterval(timer);
}

function ClearHighScores() {
    highScores.add('hidden');
}

function DisplayHighScores() {
    questionPage.classList.add('hidden');
    resultsPage.classList.add('hidden');
    startPage.classList.add('hidden');
    highScorePage.classList.remove('hidden');
    highScores.innerHTML = UserSubmit();
}

function RestartQuiz() {
    questionPage.classList.add('hidden');
    resultsPage.classList.add('hidden');
    highScorePage.classList.add('hidden');
    startPage.classList.remove('hidden');
    correctAnswers = 0;
}

function Answer1() {
    SelectAnswer(1);
}

function Answer2() {
    SelectAnswer(2);
}

function Answer3() {
    SelectAnswer(3);
}

function Answer4() {
    SelectAnswer(4);
}

function SelectAnswer(answer) {
    var question = questions[currentQuestion];
    if (answer < 1 || answer > 4)
    {
        alert("Error!");
        return;
    }
    var isCorrect = question.answers[answer-1].correct;

    if (isCorrect == true) {
        correctAnswers++;
        answerResult.classList.remove('hidden');
        answerResult.innerHTML = "Correct!";
    } else {
        answerResult.classList.remove('hidden');
        answerResult.innerHTML = "Wrong!";
    }

    currentQuestion++;
    if (currentQuestion >= numQuestions) {
        return EndQuiz();
    }
    else {
        questionLabel.innerHTML = questions[currentQuestion].question;
        A1Button.innerHTML = questions[currentQuestion].answers[0].text;
        A2Button.innerHTML = questions[currentQuestion].answers[1].text;
        A3Button.innerHTML = questions[currentQuestion].answers[2].text;
        A4Button.innerHTML = questions[currentQuestion].answers[3].text;
        //Move to next answer
    }
};

const questions = [ {
        uid: 1,
        question: 'What does HTML stand for?',
        answers: [
            {id: 1, text: 'Harrys Talking Monkey Language', correct: false},
            {id: 2, text: 'Hyper-Tools Marketing Logistics', correct: false},
            {id: 3, text: 'Hyper-Text Markup Language', correct: true},
            {id: 4, text: 'It doesnt actually stand for anything', correct: false}
        ] 
    }, {
        uid: 2,
        question: 'Strings can include:',
        answers: [
            {id: 1, text: 'Text', correct: false},
            {id: 2, text: 'Numbers', correct: false},
            {id: 3, text: 'Special Characters', correct: false},
            {id: 4, text: 'All of the above', correct: true}
        ] 
    }, {
        uid: 3,
        question: 'What is a void function?',
        answers: [
            {id: 1, text: 'A function that doesnt return a value', correct: true},
            {id: 2, text: 'A function that padding to elements', correct: false},
            {id: 3, text: 'A function that only returns hidden values', correct: false},
            {id: 4, text: 'There is no such thing as a void function', correct: false}
        ] 
    }, {
        uid: 4,
        question: 'What is the command for changing your current directory in GitBash?',
        answers: [
            {id: 1, text: 'ls "directoryname"', correct: false},
            {id: 2, text: 'cd "directoryname"', correct: true},
            {id: 3, text: 'change-directory "directoryname"', correct: false},
            {id: 4, text: 'pwd "directoryname"', correct: false}
        ] 
    }, {
        uid: 5,
        question: 'What values does a boolean operator return?',
        answers: [
            {id: 1, text: 'Strings', correct: false},
            {id: 2, text: 'True/False values', correct: true},
            {id: 3, text: 'Numbers', correct: false},
            {id: 4, text: 'Page values', correct: false}
        ] 
    }
]