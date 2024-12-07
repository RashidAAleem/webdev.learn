
//    // Display logged-in username
//    const username = JSON.parse(localStorage.getItem('userData'))?.username || "Guest";
//    document.getElementById('username-display').textContent = username;
//    document.getElementById('username-display-dropdown').textContent = username;

   // Logout button functionality
   document.getElementById('logout-button').addEventListener('click', () => {
    localStorage.removeItem('userData');
    alert('Logged out successfully!');
    window.location.href = '../index.html';
});

document.getElementById('logout-button-dropdown').addEventListener('click', () => {
    localStorage.removeItem('userData');
    alert('Logged out successfully!');
    window.location.href = '../index.html';
});

var questions = [
    {
      question: "What does JavaScript stand for?",
      option1: "Java Syntax",
      option2: "Just Simple",
      option3: "None of the above",
      correctAnswer: "None of the above",
    },
    {
      question: "Which method is used to add an element to the end of an array in JavaScript?",
      option1: "push()",
      option2: "pop()",
      option3: "shift()",
      correctAnswer: "push()",
    },
    {
      question: "How do you write a comment in JavaScript?",
      option1: "// This is a comment",
      option2: "<!-- This is a comment -->",
      option3: "' This is a comment",
      correctAnswer: "// This is a comment",
    },
    {
      question: "Which of the following is not a valid JavaScript data type?",
      option1: "string",
      option2: "integer",
      option3: "boolean",
      correctAnswer: "integer",
    },
    {
      question: "How do you declare a variable in JavaScript?",
      option1: "var",
      option2: "let",
      option3: "Both var and let",
      correctAnswer: "Both var and let",
    },
    {
      question: "Which function is used to parse a string to an integer in JavaScript?",
      option1: "parseFloat()",
      option2: "parseInt()",
      option3: "toInteger()",
      correctAnswer: "parseInt()",
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      option1: "The current function",
      option2: "The global object",
      option3: "The current object",
      correctAnswer: "The current object",
    },
    {
      question: "How do you create a function in JavaScript?",
      option1: "function myFunction() {}",
      option2: "function: myFunction() {}",
      option3: "create function myFunction() {}",
      correctAnswer: "function myFunction() {}",
    },
    {
      question: "What is the result of 5 + '5' in JavaScript?",
      option1: "55",
      option2: "10",
      option3: "Error",
      correctAnswer: "55",
    },
    {
      question: "Which of the following methods is used to find the length of a string in JavaScript?",
      option1: "length()",
      option2: "size()",
      option3: "length",
      correctAnswer: "length",
    },
  ];
  

var ques = document.getElementById("question");
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var nextButton = document.getElementById("nextQuestion")

var index = 0;
var score = 0;

// ques.innerHTML=questions[0].question;
// option1.innerHTML=questions[0].option1;
// option2.innerHTML=questions[0].option2;
// option3.innerHTML=questions[0].option3;

// Load Question
function loadQuestion(){
 var options = document.getElementsByName("answer");
for (var i = 0; i < options.length; i++) {
if (options[i].checked) {
 var selected = options[i].value;
 var userAnswer = questions[index-1][`option${selected}`];
 var correctAns = questions[index-1].correctAnswer;
 if (userAnswer===correctAns) {
   score++
   
 }
    
}
options[i].checked=false;

}

if (index >questions.length-1) {
console.log("Question End");
var percentage = (score / questions.length) * 100;
var feedback;

// Provide feedback based on the percentage score
if (percentage >= 90) feedback = "Excellent!";
else if (percentage >= 80) feedback = "Very Good!";
else if (percentage >= 70) feedback = "Satisfactory.";
else feedback = "Needs more practice.";

// Show the result using SweetAlert2
Swal.fire({
   title: "Quiz Completed!",
   html: `<p>Your Score: <b>${percentage.toFixed(2)}%</b></p>
          <p>Feedback: <b>${feedback}</b></p>`,
   icon: "success",
   confirmButtonText: "Finish",
}).then(() => {
 window.location.href = "../quiz.html";
});

return; // Exit the function to stop loading more questions

} else{
ques.innerText=questions[index].question;
option1.innerText=questions[index].option1;
option2.innerText=questions[index].option2;
option3.innerText=questions[index].option3;
index++
nextButton.disabled = true;
min=1;
sec=15;
// options[i].checked=false
}


}

loadQuestion()

function enableBtn(){
 nextButton.disabled = false;
}

var min = 1;
var sec = 14

var timer = document.getElementById("timer");
var interval = setInterval(function () {
timer.innerHTML = `${min} : ${sec}`;
sec--;

if (sec < 0) {
 if (min < 1) {
   loadQuestion();
   min = 1;
   sec = 15;
 } else {
   min--;
   sec = 59;
 }
}
}, 1000);