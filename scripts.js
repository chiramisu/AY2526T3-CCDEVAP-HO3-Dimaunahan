let operand1, operand2, operator, correctAnswer;
let score = 0;
const operators = ["+", "-", "*"];

function generateQuestion(){
    // operands are random numbers between 0 and 10
    operand1 = Math.floor(Math.random() * 11);
    operand2 = Math.floor(Math.random() * 11);

    // 3 elements in the array
    // random index between 0 and 2
    operator = operators[Math.floor(Math.random() * 3)];

    switch(operator){
        case "+":
            correctAnswer = operand1 + operand2;
            break;
        case "-":
            correctAnswer = operand1 - operand2;
            break;
        case "*":
            correctAnswer = operand1 * operand2;
            break;
    }
    document.getElementById("question").textContent = operand1 + " " + operator + " " + operand2;
}

function checkAnswer(){
    const userAnswer = Number(document.getElementById("answer").value);
    
    if(userAnswer === correctAnswer){
        score++;      
        document.getElementById("score").innerHTML = score;

        // print the success message to the console
        document.getElementById("message").innerHTML = "Correct!";

        // change color of the message to green
        document.getElementById("message").style.color = "green";
    }
    else {
        // else if wrong, print the correct answer to the console
        document.getElementById("message").innerHTML = "Incorrect. The correct answer was " + correctAnswer;

        // change color of the message to red
        document.getElementById("message").style.color = "red";
    }

    document.getElementById("answer").value = "";
    generateQuestion();

    if (score === 5){
        document.getElementById("div-questions").style.display = "none";
        document.getElementById("div-success").style.display = "block";
    }
}

function playAgain(){
    document.getElementById("div-success").style.display = "none";
    score = 0;
    document.getElementById("score").innerHTML = score;
    document.getElementById("message").innerHTML = "";

    generateQuestion();
    document.getElementById("div-questions").style.display = "block";
}

// generate the first question when the page loads
generateQuestion(); // OHHHHH MY GOD THIS WAS THE ONLY LINE I NEEDED TO FINISH