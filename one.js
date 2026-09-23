<<<<<<< HEAD
var questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "variable", "int", "string"],
        answer: "var"
    },
    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: ["#", "//", "<!-- -->", "**"],
        answer: "//"
    },
    {
        question: "Which method is used to display a message in the browser console?",
        options: ["print()", "display()", "console.log()", "message()"],
        answer: "console.log()"
    },
    {
        question: "Which keyword is used to create a function in JavaScript?",
        options: ["function", "def", "fun", "method"],
        answer: "function"
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        options: ["=", "==", "===", "!="],
        answer: "==="
    }
];

var currentQuestion = 0;
var score = 0;
var selectedIndex = -1;
var questionTime = 30;
var totalTime = 150;

var questionTimer;
var totalTimer;

document.getElementById("startButton").addEventListener("click", startQuiz);

document.getElementById("nextButton").addEventListener("click", nextQuestion);

function startQuiz() {

    var name = document.getElementById("name").value.trim();
    var roll = document.getElementById("roll").value.trim();
    var email = document.getElementById("email").value.trim();
    var course = document.getElementById("course").value.trim();

    if (name === "" || roll === "" || email === "" || course === "") {
        alert("Please enter all details.");
        return;
    }

    currentQuestion = 0;
    score = 0;
    selectedIndex = -1;
    totalTime = questions.length * 30;

    document.getElementById("page1").style.display = "none";
    document.getElementById("quizPage").style.display = "block";
    document.getElementById("resultPage").style.display = "none";

    showQuestion();
    startTotalTimer();
}

function showQuestion() {

    clearInterval(questionTimer);

    var q = questions[currentQuestion];

    selectedIndex = -1;

    document.getElementById("questionNumber").innerHTML =
        currentQuestion + 1;

    document.getElementById("question").innerHTML =
        q.question;

    document.getElementById("questionTimer").innerHTML = "30";

    var options = document.getElementById("options");

    options.innerHTML = "";

    for (var i = 0; i < q.options.length; i++) {

        var option = document.createElement("div");

        option.className = "option";

        option.innerHTML = (i + 1) + ". " + q.options[i];

        option.dataset.index = i;

        option.addEventListener("click", function () {
            selectOption(parseInt(this.dataset.index));
        });

        options.appendChild(option);
    }

    if (currentQuestion === questions.length - 1) {
        document.getElementById("nextButton").innerHTML = "Submit";
    } else {
        document.getElementById("nextButton").innerHTML = "Next";
    }

    startQuestionTimer();
}

function selectOption(index) {

    var allOptions = document.getElementsByClassName("option");

    if (index < 0 || index >= allOptions.length) {
        return;
    }

    selectedIndex = index;

    for (var i = 0; i < allOptions.length; i++) {

        allOptions[i].classList.remove("selected");
        allOptions[i].classList.remove("unselected");

        if (i === index) {
            allOptions[i].classList.add("selected");
        } else {
            allOptions[i].classList.add("unselected");
        }
    }
}

function startQuestionTimer() {

    clearInterval(questionTimer);

    questionTime = 30;

    document.getElementById("questionTimer").innerHTML = "30";

    questionTimer = setInterval(function () {

        questionTime--;

        document.getElementById("questionTimer").innerHTML =
            questionTime;

        if (questionTime <= 0) {

            clearInterval(questionTimer);

            nextQuestion();
        }

    }, 1000);
}

function startTotalTimer() {

    clearInterval(totalTimer);

    totalTimer = setInterval(function () {

        totalTime--;

        var minutes = Math.floor(totalTime / 60);
        var seconds = totalTime % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.getElementById("totalTimer").innerHTML =
            "0" + minutes + ":" + seconds;

        if (totalTime <= 0) {

            clearInterval(totalTimer);
            clearInterval(questionTimer);

            finishQuiz();
        }

    }, 1000);
}

function nextQuestion() {

    clearInterval(questionTimer);

    if (selectedIndex !== -1) {

        var selectedValue =
            questions[currentQuestion].options[selectedIndex];

        if (selectedValue === questions[currentQuestion].answer) {
            score++;
        }
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishQuiz();
    }
}

function finishQuiz() {

    clearInterval(questionTimer);
    clearInterval(totalTimer);

    document.getElementById("resultName").innerHTML =
        document.getElementById("name").value;

    document.getElementById("resultRoll").innerHTML =
        document.getElementById("roll").value;

    document.getElementById("score").innerHTML =
        score;

    document.getElementById("quizPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
}

document.addEventListener("keydown", function (event) {

    var quizPage = document.getElementById("quizPage");

    if (quizPage.style.display !== "block") {
        return;
    }

    var options = document.getElementsByClassName("option");

    if (event.key === "ArrowDown") {

        event.preventDefault();

        if (selectedIndex === -1) {
            selectOption(0);
        } else {
            var nextIndex = selectedIndex + 1;

            if (nextIndex >= options.length) {
                nextIndex = 0;
            }

            selectOption(nextIndex);
        }
    }

    else if (event.key === "ArrowUp") {

        event.preventDefault();

        if (selectedIndex === -1) {
            selectOption(options.length - 1);
        } else {
            var previousIndex = selectedIndex - 1;

            if (previousIndex < 0) {
                previousIndex = options.length - 1;
            }

            selectOption(previousIndex);
        }
    }

    else if (
        event.key === "1" ||
        event.key === "2" ||
        event.key === "3" ||
        event.key === "4"
    ) {

        var number = parseInt(event.key);

        if (number <= options.length) {
            selectOption(number - 1);
        }
    }

    else if (event.key === "Enter") {

        event.preventDefault();

        nextQuestion();
    }
});
=======
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "Which language is used to style a webpage?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        answer: "CSS"
    },

    {
        question: "Which language is used to add interactivity to a webpage?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: "JavaScript"
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "var",
            "int",
            "string",
            "define"
        ],
        answer: "var"
    },

    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
            "//",
            "#",
            "<!-- -->",
            "/*/"
        ],
        answer: "//"
    }
];


// Get HTML Elements

const detailsPage = document.getElementById("detailsPage");
const quizPage = document.getElementById("quizPage");
const resultPage = document.getElementById("resultPage");

const detailsForm = document.getElementById("detailsForm");


// Variables

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";


// Start Quiz

detailsForm.addEventListener("submit", function(event) {

    event.preventDefault();

    detailsPage.style.display = "none";
    quizPage.style.display = "block";

    showQuestion();
});


// Show Question

function showQuestion() {

    selectedAnswer = "";

    let question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        "Question " + (currentQuestion + 1) +
        " of " + questions.length;

    let progress =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progressPercent").textContent =
        progress + "%";

    document.getElementById("progressBar").style.width =
        progress + "%";

    document.getElementById("score").textContent =
        "Score: " + score;

    document.getElementById("question").textContent =
        question.question;


    // Show Options

    let options = document.getElementById("options");

    options.innerHTML = "";


    question.options.forEach(function(option) {

        let optionElement = document.createElement("div");

        optionElement.className = "option";

        optionElement.textContent = option;


        optionElement.addEventListener("click", function() {

            let allOptions =
                document.querySelectorAll(".option");

            allOptions.forEach(function(item) {
                item.classList.remove("selected");
            });

            optionElement.classList.add("selected");

            selectedAnswer = option;
        });


        options.appendChild(optionElement);

    });


    // Change Button Text

    let nextButton = document.getElementById("nextBtn");

    if (currentQuestion == questions.length - 1) {

        nextButton.querySelector("span").textContent =
            "Submit Quiz";

        nextButton.querySelector(".arrow").textContent =
            "✓";

    } else {

        nextButton.querySelector("span").textContent =
            "Next Question";

        nextButton.querySelector(".arrow").textContent =
            "→";
    }
}


// Next Question Button

document.getElementById("nextBtn").addEventListener(
    "click",
    function() {

        if (selectedAnswer == "") {

            alert("Please select an answer.");

            return;
        }


        // Check Answer

        if (selectedAnswer == questions[currentQuestion].answer) {
            score++;
        }


        currentQuestion++;


        // Show Next Question

        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            showResult();

        }

    }
);


// Show Result

function showResult() {

    quizPage.style.display = "none";
    resultPage.style.display = "block";


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let college = document.getElementById("college").value;
    let branch = document.getElementById("branch").value;
    let year = document.getElementById("year").value;


    // Display User Details

    document.getElementById("resultName").textContent =
        name;

    document.getElementById("resultEmail").textContent =
        email;

    document.getElementById("resultCollege").textContent =
        college;

    document.getElementById("resultBranch").textContent =
        branch;

    document.getElementById("resultYear").textContent =
        year;


    // Display Score

    document.getElementById("finalScore").textContent =
        score + " / " + questions.length;


    let percentage =
        Math.round((score / questions.length) * 100);

    document.getElementById("percentage").textContent =
        percentage + "%";
}

>>>>>>> 5fc7c8b6f008b4bcf2ad49520d70f2aa66934e33
