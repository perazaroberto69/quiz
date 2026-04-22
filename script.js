console.log("Script started");

/* Questions objects should be formatted like this:
{
    question: "What is the capital of Arizona?",
    option1: "Tucson",
    option2: "Phoenix",
    option3: "Yuma",
    option4: "Flagstaff",
    answer: "Phoenix"
}
*/

// TODO: Create an array of objects to store the questions, options, and answer
let questions = [
    {
        question: "What is the capital of Arizona?",
        option1: "Pheonix",
        option2: "Pima",
        option3: "Flagstaff",
        option4: "Tucson",
        answer: "Pheonix"
    },
    {
        question: "How many states are in the U.S",
        option1: "48",
        option2: "13",
        option3: "50",
        option4: "67",
        answer: "50"
    }
];
console.log(questions)
// TODO: Declare an empty array that will hold the user's answers
let = userAnswers = [];
// TODO: Declare a variable to keep track of which question (index) we are on
let questionNum = 0;

function showNextQuestion() {
    // TODO: Get the current question
    let currQues = questions[questionNum];
    // TODO: Set the text of the question element
    let question = document.getElementById("question");
    // TODO: Set the text of each option element
    question.innerText = currQues.question;
    let option1 = document.getElementById("option1text");
    option1.innerText = currQues.option1;

    let option2 = document.getElementById("option2text");
    option2.innerText = currQues.option2;

    let option3 = document.getElementById("option3text");
    option3.innerText = currQues.option3;

    let option4 = document.getElementById("option4text");
    option4.innerText = currQues.option4;
}

// TODO: Call showNextQuestion to load the first question when the page loads
showNextQuestion();

function submitAnswer(event) {
    console.log("Submit clicked");
    // TODO: Prevent the form from reloading the page
    event.preventDefault();
    // Get the radio button input elements
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    let option4 = document.getElementById("option4");

    // TODO: Get the current question
    let currQues = questions[questionNum]
    // TODO: Use a conditional (if/else-if) to check which option was clicked and push the option text into the userAnswer array
    if (option1.checked){
        userAnswers.push(currQues.option1)
    }
    else if (option2.checked){
        userAnswers.push(currQues.option2)
    }
    else if (option3.checked){
        userAnswers.push(currQues.option3)
    }
    else if (option4.checked){
        userAnswers.push(currQues.option4)
    }
    else {
        alert("You need to pick an answer")
    }
    console.log(userAnswers)
    // TODO: Add one to the question index

    // TODO: Load the next question
}

function checkAnswers() {
    // TODO: Iterate through the user answers array and count how many are correct

    // TODO: Show an alert to the user with how many they got right out of the total

    // TODO: Reset and start over
}