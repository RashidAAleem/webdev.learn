
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
      question: "What does HTML stand for?",
      option1: "Hyper Text Markup Language",
      option2: "Home Tool Markup Language",
      option3: "Hyperlinks and Text Markup Language",
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question: "Which HTML element is used for the largest heading?",
      option1: "<h6>",
      option2: "<h1>",
      option3: "<header>",
      correctAnswer: "<h1>",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      option1: "<br>",
      option2: "<lb>",
      option3: "<break>",
      correctAnswer: "<br>",
    },
    {
      question:
        "Which attribute is used to provide an alternative text for an image?",
      option1: "alt",
      option2: "title",
      option3: "src",
      correctAnswer: "alt",
    },
    {
      question: "What is the correct way to make a checkbox in HTML?",
      option1: "<input type='checkbox'>",
      option2: "<checkbox>",
      option3: "<input type='box'>",
      correctAnswer: "<input type='checkbox'>",
    },
    {
      question: "Which HTML tag is used to create an unordered list?",
      option1: "<ul>",
      option2: "<ol>",
      option3: "<list>",
      correctAnswer: "<ul>",
    },
    {
      question: "What does the <title> element define?",
      option1: "The document's body",
      option2: "The document's title in the browser toolbar",
      option3: "The main heading",
      correctAnswer: "The document's title in the browser toolbar",
    },
    {
      question: "Which tag is used to define a hyperlink in HTML?",
      option1: "<link>",
      option2: "<href>",
      option3: "<a>",
      correctAnswer: "<a>",
    },
    {
      question:
        "What is the correct syntax for adding a background color in HTML?",
      option1: "<body bg='color'>",
      option2: "<body style='background-color: color;'>",
      option3: "<background color='color'>",
      correctAnswer: "<body style='background-color: color;'>",
    },
    {
      question: "How can you make text bold in HTML?",
      option1: "<strong>",
      option2: "<b>",
      option3: "Both <strong> and <b>",
      correctAnswer: "Both <strong> and <b>",
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