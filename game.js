const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progress-text');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
les score = 0 
let questionCounter = 0 
let availableQuestions = []

let questions = [
        {question: "Commonly used data types do not include which of the following?",
            choice1: 'Strings',
            choice2: 'Booleans',
            choice3: 'Alerts',
            choice4: 'Numbers',
            answer: 3,
        },
        { prompt: "The condition in an if/else statement is contained within:",
            choice1: 'Quotations',
            choice2: 'Curly brackets',
            choice3: 'Square brackets',
            choice4: 'Parenthesis',
            answer: 4,
        },
        {prompt: "Arrays in javascript can be stored in:",
            choice1: 'Numbers and strings',
            choice2: 'Other arrays',
            choice3: 'Booleans',
            choice4: 'All of the above',
            Answer: 4,
        },
        {prompt: "String values in jasvascript will be contained in which of the following when being assigned to variables?",
            choice1: 'Commas',
            choice2: 'Curly brackets',
            choice3: 'Quotations',
            choice4: 'Parenthesis',
            answer: 3,
        },
        {prompt: "A very helpful tool during debugging and development for printing content to the debugger is:",  
            choice1: 'Git/Bash'
            choice2: 'Console log'
            choice3:'Javascript'
            choice4:'For loops'
            answer: "b"
        }
    ]

    const SCORE_POINTS = 100
    const MAX_QUESTIONS = 5

startgame = () => {
    questionCounter = 0 
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}




