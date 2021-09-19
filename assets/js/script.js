const startBtn = document.getElementById("start-button");
startBtn.addEventListener('click', StartQuiz);
const questionPage = document.getElementById("question-one");
const questionLabel = document.getElementById("question");
const A1Button = document.getElementById("A1");
A1Button.addEventListener('click', Answer1);
const A2Button = document.getElementById("A2");
A2Button.addEventListener('click', Answer2);
const A3Button = document.getElementById("A3");
A3Button.addEventListener('click', Answer3);
const A4Button = document.getElementById("A4");
A4Button.addEventListener('click', Answer4);

var curQuestion = 0;
var numQuestions = 0;

function StartQuiz() {
    curQuestion = 0; // defensive
    document.getElementById("start-page").classList.add('hidden');
    questionPage.classList.remove('hidden');
    questionLabel.innerHTML = questions[curQuestion].question;
    A1Button.innerHTML = questions[curQuestion].answers[0].text;
    A2Button.innerHTML = questions[curQuestion].answers[1].text;
    A3Button.innerHTML = questions[curQuestion].answers[2].text;
    A4Button.innerHTML = questions[curQuestion].answers[3].text;
    numQuestions = questions.length;
};

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
    var question = questions[curQuestion];
    if (answer < 1 || answer > 4)
    {
        // Error condition
    }
    var isCorrect = question.answers[answer-1].correct;

    curQuestion++;
    if (curQuestion >= numQuestions) 
    {
        // Finished
    }
    else
    {
        questionLabel.innerHTML = questions[curQuestion].question;
        A1Button.innerHTML = questions[curQuestion].answers[0].text;
        A2Button.innerHTML = questions[curQuestion].answers[1].text;
        A3Button.innerHTML = questions[curQuestion].answers[2].text;
        A4Button.innerHTML = questions[curQuestion].answers[3].text;
        // move to next answer
    }
};

const questions = [
    {
        uid: 1,
        question: 'Question 1?',
        answers: [
            {id: 1, text: 'Answer 1', correct: true},
            {id: 2, text: 'Answer 2', correct: false},
            {id: 3, text: 'Answer 3', correct: false},
            {id: 4, text: 'Answer 4', correct: false}
        ] 
    },
    {
        uid: 2,
        question: 'Question 2?',
        answers: [
            {id: 1, text: 'Answer 21', correct: true},
            {id: 2, text: 'Answer 22', correct: false},
            {id: 3, text: 'Answer 23', correct: false},
            {id: 4, text: 'Answer 24', correct: false}
        ] 
    },
    {
        uid: 3,
        question: 'Question 3?',
        answers: [
            {id: 1, text: 'Answer 31', correct: true},
            {id: 2, text: 'Answer 32', correct: false},
            {id: 3, text: 'Answer 33', correct: false},
            {id: 4, text: 'Answer 34', correct: false}
        ] 
    }
]