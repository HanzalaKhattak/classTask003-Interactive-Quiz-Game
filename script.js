var questions = [
    {
        question: "What is the capital of Russia?",
        choice: ["Islamabad", "Washington", "Mosccow", "Kabul"],
        answer: 2
    },
    {
        question: "Who was the undisputed UFC Champion with a 29 - 0 Wins Record?",
        choice: ["Volkanowski", "Jones", "Lesner","Khabib"],
        answer: 3
    },
    {
        question: "What is our Planet's Name?",
        choice: ["Mars", "Earth", "Jupiter", "Moon"],
        answer: 1
    }
];


// Function which will show us the questions
var currentQuestionIndex = 0;
var Score = 0;

function showQuestion(){
    var questionEl = document.getElementById('question')
    questionEl.textContent = questions[currentQuestionIndex].question;
    document.getElementById('choice1').textContent = questions[currentQuestionIndex].choice[0];
    document.getElementById('choice2').textContent = questions[currentQuestionIndex].choice[1];
    document.getElementById('choice3').textContent = questions[currentQuestionIndex].choice[2];
    document.getElementById('choice4').textContent = questions[currentQuestionIndex].choice[3];
}

// Function to check the answer
function checkAnswer(selectedChoiceIndex){
    if(selectedChoiceIndex === questions[currentQuestionIndex].answer){
        alert("Your Answer is Correct!")
        Score++;
        document.getElementById('score').textContent = "Score:" + Score;
    }else{
        alert("Wrong Answer")
    }
    // currentQuestionIndex++;
}

// function for next question
function nextQuestion(){

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        // currentQuestionIndex++;
    }else{
        document.getElementById('result').textContent = "Your Score is :" + Score;
        
    }
}
showQuestion();