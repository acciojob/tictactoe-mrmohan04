//your JS code here. If required.

        const player1 = document.getElementById("player-1")
        const player2 = document.getElementById("player-2")
        const form = document.getElementById("form-container")
        const gameSection = document.getElementById("game-container")
        const playerTurnInfo = document.getElementById("player-turn-info")
        const boxes = document.querySelectorAll(".box")


        form.addEventListener("submit", (e) => {
            e.preventDefault()

            // Display game section & hide the form
            gameSection.style.display = "block"
            form.style.display = "none"

            playerTurnInfo.innerHTML = `${player1.value}, you are up!! `
        })


        let isPlayerOneTurn = true

        const playerOneClicks = []
        const playerTwoClicks = []

        // Add click event listner to all the boxes
        boxes.forEach((box) => {
            box.addEventListener("click",(box)=>playerClick(box))

        })
        function playerClick(box) {
            console.log(box.target.id,"got clicked")
            if (isPlayerOneTurn) {
                box.target.innerHTML = "X"
                isPlayerOneTurn = false
                playerOneClicks.push(box.id)
                playerTurnInfo.innerHTML = `${player2.value}, you are up!! `
                box.target.removeEventListener("click", ()=>playerClick(box))

            }
            //  Player 2 click/turn
            else {

                box.target.innerHTML = "O"
                isPlayerOneTurn = true
                playerTwoClicks.push(box.id)
                playerTurnInfo.innerHTML = `${player1.value}, you are up!! `
                box.target.removeEventListener("click", ()=>playerClick(box))
            }
        }


 function checkWinner(playerName) {
      for (const combo of winningCombos) {
        const [a,b,c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          messageDiv.textContent = `${playerName}, congratulations you won!`;
          gameOver = true;
          return;
        }
      }

      if (!board.includes("") && !gameOver) {
        messageDiv.textContent = "It's a draw!";
        gameOver = true;
      }
    }
 