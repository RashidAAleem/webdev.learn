
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
      question: "What does CSS stand for?",
      option1: "Cascading Style Sheets",
      option2: "Creative Style Sheets",
      option3: "Colorful Style Sheets",
      correctAnswer: "Cascading Style Sheets",
    },
    {
      question: "Which CSS property is used to change the text color?",
      option1: "color",
      option2: "font-color",
      option3: "text-color",
      correctAnswer: "color",
    },
    {
      question: "How do you select an element with the class 'example' in CSS?",
      option1: ".example",
      option2: "#example",
      option3: "example",
      correctAnswer: ".example",
    },
    {
      question: "Which CSS property is used to change the font size of text?",
      option1: "font-size",
      option2: "text-size",
      option3: "font-style",
      correctAnswer: "font-size",
    },
    {
      question: "How do you make text bold in CSS?",
      option1: "font-weight: bold;",
      option2: "text-weight: bold;",
      option3: "font-style: bold;",
      correctAnswer: "font-weight: bold;",
    },
    {
      question: "Which CSS property is used to change the background color?",
      option1: "background-color",
      option2: "bg-color",
      option3: "color",
      correctAnswer: "background-color",
    },
    {
      question: "What does the 'padding' property in CSS do?",
      option1: "Adds space around the element's content",
      option2: "Adds space inside the element's border",
      option3: "Changes the background color of the element",
      correctAnswer: "Adds space inside the element's border",
    },
    {
      question: "Which CSS property is used to change the layout of an element?",
      option1: "display",
      option2: "layout",
      option3: "position",
      correctAnswer: "display",
    },
    {
      question: "How do you make a link underlined in CSS?",
      option1: "text-decoration: underline;",
      option2: "link-decoration: underline;",
      option3: "underline: true;",
      correctAnswer: "text-decoration: underline;",
    },
    {
      question: "Which property is used to set the space between lines of text in CSS?",
      option1: "line-height",
      option2: "text-spacing",
      option3: "letter-spacing",
      correctAnswer: "line-height",
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