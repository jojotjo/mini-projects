(() => {
    let userScore = 0;
    let compScore = 0;

    const choices = document.querySelectorAll(".choice");
    const msg = document.querySelector("#msg");
    const userScorePara = document.querySelector("#user");
    const compScorePara = document.querySelector("#comp");

    const genCompChoice = () => {
        const options = ["rock", "paper", "scissors"];
        const randIdx = Math.floor(Math.random() * options.length);
        return options[randIdx];

    }
    const drawGame = () => {
        msg.innerText = `Game was draw. Play again!`;
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
    }

    const showWinner = (userwin, userChoice, CompChoice) => {
        if (userwin) {
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `you win! ${userChoice} beats ${CompChoice}`;
            msg.style.backgroundColor = "green";
        }
        else {
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText=`you lose! ${CompChoice} beats ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    }

    const playGame = (userChoice) => {
        const CompChoice = genCompChoice();
        if (userChoice === CompChoice) {
            //draw game
            drawGame();
        }
        else {
            let userwin = true;
            if (userChoice === "rock") {
                userwin = CompChoice === "paper" ? false : true;
            }
            else if (userChoice === "paper") {
                userwin = CompChoice === "scissors" ? false : true;
            }
            else {
                userwin = CompChoice === "rock" ? false : true;
            }
            showWinner(userwin, userChoice, CompChoice);
        }
    }

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        });
    });
})();