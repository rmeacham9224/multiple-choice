const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0 
let questionCounter = 0 
let availableQuestions = []

let questions = [
        {
            question: "Commonly used data types do not include which of the following?",
            choice1: "Strings",
            choice2: "Booleans",
            choice3: "Alerts",
            choice4: "Numbers",
            answer: 3,
        },
        {
            question: "The condition in an if/else statement is contained within:",
            choice1: "Quotations",
            choice2: "Curly brackets",
            choice3: "Square brackets",
            choice4: "Parenthesis",
            answer: 4,
        },
        {
            question: "Arrays in javascript can be stored in:",
            choice1: "Numbers and strings",
            choice2: "Other arrays",
            choice3: "Booleans",
            choice4: "All of the above",
            Answer: 4,
        },
        {
            question: "String values in jasvascript will be contained in which of the following when being assigned to variables?",
            choice1: "Commas",
            choice2: "Curly brackets",
            choice3: "Quotations",
            choice4: "Parenthesis",
            answer: 3,
        },
        {
            question: "A very helpful tool during debugging and development for printing content to the debugger is:",  
            choice1: "Git/Bash",
            choice2: "Console log",
            choice3: "Javascript",
            choice4: "For loops",
            answer: 2,
        }
    ]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0 
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    
    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
            if(!acceptingAnswers) return 

            acceptingAnswers = false
            const selectedChoice = e.target
            const selectedAnswer = selectedChoice.dataset['number']

            let classToApply = selectedAnswer == currentQuestion.answer ? 'correct':
            'incorrect'

            if(classToApply === 'correct') {
                incrementScore(SCORE_POINTS)
            }

            selectedChoice.parentElement.classList.add(classToApply)

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply)
                getNewQuestion()
            }, 1000)
    })
})

incrementScore = num => {
    score += num 
    scoreText.innerText = score
}

startGame()




