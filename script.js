document.getElementById("rollButton").addEventListener("click", function () {
    let numberOne = getRandomNumber();
    let numberTwo = getRandomNumber();

    updateResult(numberOne, numberTwo);
    updateDiceVisibility(numberOne, numberTwo);
    updateScore(numberOne, numberTwo);
});

function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateResult(numberOne, numberTwo) {
    let resultMessage = "";

    if (numberOne === numberTwo) {
        resultMessage = "Draw";
    } else if (numberOne > numberTwo) {
        resultMessage = "Player&nbsp;1&nbsp;Wins!";
    } else {
        resultMessage = "Player&nbsp;2&nbsp;Wins!";
    }

    document.querySelector(".review h1").innerHTML = resultMessage;
}

function updateDiceVisibility(numberOne, numberTwo) {
    hideAllDots(".first-dice .dot");
    hideAllDots(".second-dice .dot");

    showDice(".dotOne-" + numberOne, ".first-dice");
    showDice(".dotTwo-" + numberTwo, ".second-dice");
}

function hideAllDots(diceClass) {
    document.querySelectorAll(diceClass).forEach(dot => {
        dot.style.visibility = "hidden";
    });
}

function showDice(diceClass, diceContainer) {
    let dots = document.querySelector(diceContainer + " " + diceClass).children;
    for (let dot of dots) {
        dot.style.visibility = "visible";
    }
}

function updateScore(numberOne, numberTwo) {
    document.querySelector(".firstScore h1").textContent = numberOne;
    document.querySelector(".secondScore h1").textContent = numberTwo;
}
