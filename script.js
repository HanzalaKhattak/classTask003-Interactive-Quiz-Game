var questions = [
    {
        question: "What is the capital of Russia?",
        choice: ["Islamabad", "Washington", "Mosccow", "Kabul"],
        answer: 2
    },
    {
        question: "Who was the undisputed UFC Champion with a 29 - 0 Wins Record?",
        choices: ["Volkanowski", "Jones", "Lesner","Khabib"],
        answer: 3
    },
    {
        question: "What is our Planet's Name?",
        choices:c["Mars", "Earth", "Jupiter", "Moon"],
        answer: 1
    }
];


// Function which will show us the questions
var currentQuestionIndex = 0;

function showQuestion(){
    document.getElementById('question').textContent = questions[currentQuestionIndex].question;
    document.getElementById('choice1').textContent = questions[currentQuestionIndex].choice[0];
    document.getElementById('choice2').textContent = questions[currentQuestionIndex].choice[1];
    document.getElementById('choice3').textContent = questions[currentQuestionIndex].choice[2];
    document.getElementById('choice4').textContent = questions[currentQuestionIndex].choice[3];
}

// Function to check the answer
function checkAnswer(selectedChoiceIndex){
    if(selectedChoiceIndex === questions[currentQuestionIndex].answer){
        alert("Your Answer is Correct!")
    }else{
        alert("Wrong Answer")
    }
}
showQuestion();