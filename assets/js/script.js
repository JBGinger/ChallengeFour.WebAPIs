const startBtn = document.getElementById("start-button");
startBtn.addEventListener('click', StartQuiz);
startBtn.addEventListener('click', Timer);

const submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener('click', DisplayHighScores);
submitBtn.addEventListener('click', UserSubmit);

const goBackBtn = document.getElementById("back-button");
goBackBtn.addEventListener('click', RestartQuiz);

var userInitials = document.getElementById("initials");
var timeToFinish = document.getElementById("clock");

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

var currentQuestion = 0;
var numQuestions = 0;
var correctAnswers = 0;

var highScoresArray = [];

function StartQuiz() {
    currentQuestion = 0;
    startPage.classList.add('hidden');
    questionPage.classList.remove('hidden');
    questionLabel.innerHTML = questions[currentQuestion].question;
    A1Button.innerHTML = questions[currentQuestion].answers[0].text;
    A2Button.innerHTML = questions[currentQuestion].answers[1].text;
    A3Button.innerHTML = questions[currentQuestion].answers[2].text;
    A4Button.innerHTML = questions[currentQuestion].answers[3].text;
    numQuestions = questions.length;
};

function Timer(){
    var sec = 60;
    var timer = setInterval(function(){
        document.getElementById('clock').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function UserSubmit() {
    var result = userInitials + " " + timeToFinish
    highScoresArray.push(result);
    return result;
}

function EndQuiz() {
    console.log("Hello");
    questionPage.classList.add('hidden');
    resultsPage.classList.remove('hidden');
    finalScore.innerHTML = "Your final score is: " + timeToFinish;
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
        question: 'Question 1?',
        answers: [
            {id: 1, text: 'Answer 1', correct: true},
            {id: 2, text: 'Answer 2', correct: false},
            {id: 3, text: 'Answer 3', correct: false},
            {id: 4, text: 'Answer 4', correct: false}
        ] 
    }, {
        uid: 2,
        question: 'Question 2?',
        answers: [
            {id: 1, text: 'Answer 21', correct: true},
            {id: 2, text: 'Answer 22', correct: false},
            {id: 3, text: 'Answer 23', correct: false},
            {id: 4, text: 'Answer 24', correct: false}
        ] 
    }, {
        uid: 3,
        question: 'Question 3?',
        answers: [
            {id: 1, text: 'Answer 31', correct: true},
            {id: 2, text: 'Answer 32', correct: false},
            {id: 3, text: 'Answer 33', correct: false},
            {id: 4, text: 'Answer 34', correct: false}
        ] 
    }, {
        uid: 4,
        question: 'Question 4?',
        answers: [
            {id: 1, text: 'Answer 41', correct: true},
            {id: 2, text: 'Answer 42', correct: false},
            {id: 3, text: 'Answer 43', correct: false},
            {id: 4, text: 'Answer 44', correct: false}
        ] 
    }, {
        uid: 5,
        question: 'Question 5?',
        answers: [
            {id: 1, text: 'Answer 51', correct: true},
            {id: 2, text: 'Answer 52', correct: false},
            {id: 3, text: 'Answer 53', correct: false},
            {id: 4, text: 'Answer 54', correct: false}
        ] 
    }
]