$(document).ready(function () {
  // Define questions and answers
  var questions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "Rome", "Madrid", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the largest continent by land area?",
      answers: ["Africa", "Asia", "North America", "South America"],
      correctAnswer: "Asia",
    },
  ];

  // Display first question
  var currentQuestionIndex = 0;
  var currentQuestion = questions[currentQuestionIndex];
  displayQuestion(currentQuestion);

  // Handle form submission
  $("form").submit(function (event) {
    event.preventDefault();
    var selectedAnswer = $("input[type='radio']:checked").val();
    if (selectedAnswer == currentQuestion.correctAnswer) {
      Swal.fire("Correct!", "You answered the question correctly.", "success");
    } else {
      Swal.fire(
        "Incorrect.",
        "You answered the question incorrectly.",
        "error"
      );
    }
    // Move to next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      currentQuestion = questions[currentQuestionIndex];
      displayQuestion(currentQuestion);
    } else {
      // End of assessment
      Swal.fire({
        title: "Assessment Complete",
        text: "You have completed the assessment.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(function () {
        // Redirect to results page
        window.location.href = "../project-2/index.html";
      });
    }
  });

  function displayQuestion(question) {
    $("#question").text(question.question);
    $("#answer1").text(question.answers[0]);
    $("#answer2").text(question.answers[1]);
    $("#answer3").text(question.answers[2]);
    $("#answer4").text(question.answers[3]);
  }
});
