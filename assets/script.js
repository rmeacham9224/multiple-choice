var score = 0;
var questions = [
    {
        prompt: "Commonly used data types do not include which of the following?\n(a) Strings\n\(b) Booleans\n(c) Alerts\n(d) Numbers",
        answer: "c"
    },
    
    { 
        prompt: "The condition in an if/else statement is contained within:\n(a)Quotes\n\(b)Curly Brackets\n(c)square brackets\n(d) parenthesis",
        answer: "d"
    },
    
    {
        prompt: "Arrays in javascript can be stored in:\n(a) numbers and strings\n\(b) other arrays\n(c) booleans\n(d) all of the above",
        Answer: "d"
    },
    
    {
        prompt: "String values in jasvascript will be contained in which of the following when being assigned to variables?\n(a) commas\n\(b) curly brackets\n(c) quotes\n(d) parenthesis",
        answer: "c"
    },
    
    {
    prompt: "A very helpful tool during debugging and development for printing content to the debugger is:\n(a) Javascript\n\(b)Console Log\n(c)For loops\n(d) Terminal/Bash",    
    answer: "b"
    }
]; 

for(var i=0; i< questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if(response === questions[i].answer) {
        score++; 
        alert("Correct!");
    } else {
        alert("Wrong!");
    }

}
alert("you got " + score + "/" + questions.length)
