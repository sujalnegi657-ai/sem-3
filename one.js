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

