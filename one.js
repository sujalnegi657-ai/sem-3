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