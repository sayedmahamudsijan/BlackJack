        let cards = [];
        let sum = 0;
        let hasBlackJack = false;
        let isAlive = false;
        let message = "";
        let gamesPlayed = 0;
        let wins = 0;
        let losses = 0;

        const messageEl = document.getElementById("message-el");
        const sumEl = document.getElementById("sum-el");
        const cardEl = document.getElementById("card-el");
        const playerEl = document.getElementById("player-el");
        const gamesPlayedEl = document.getElementById("games-played");
        const winsEl = document.getElementById("wins");
        const lossesEl = document.getElementById("losses");

        let player = {
            name: "Sayed",
            chips: 145
        };

        playerEl.textContent = player.name + ": $" + player.chips;

        function getRandomCard() {
            let randomNumber = Math.floor(Math.random() * 13) + 1;
            if (randomNumber > 10) {
                return 10;
            } else if (randomNumber === 1) {
                return 11;
            } else {
                return randomNumber;
            }
        }

        function startGame() {
            isAlive = true;
            hasBlackJack = false;
            cards = [getRandomCard(), getRandomCard()];
            sum = cards[0] + cards[1];
            renderGame();
        }

        function renderGame() {
            cardEl.textContent = "Cards: " + cards.join(" ");
            sumEl.textContent = "Sum: " + sum;

            if (sum <= 20) {
                message = "Do you want to draw a new card?";
            } else if (sum === 21) {
                message = "You've got Blackjack!";
                hasBlackJack = true;
                player.chips += 50;
                wins++;
            } else {
                message = "You're out of the game!";
                isAlive = false;
                player.chips -= 20;
                losses++;
            }

            updateGameStats();
            messageEl.textContent = message;
        }

        function newCard() {
            if (isAlive === true && hasBlackJack === false) {
                let card = getRandomCard();
                cards.push(card);
                sum += card;
                renderGame();
            }
        }

        function resetGame() {
            cards = [];
            sum = 0;
            hasBlackJack = false;
            isAlive = false;
            message = "Want to play a round?";
            messageEl.textContent = message;
            sumEl.textContent = "Sum: ";
            cardEl.textContent = "Cards: ";
        }

        function updateGameStats() {
            gamesPlayed++;
            gamesPlayedEl.textContent = gamesPlayed;
            winsEl.textContent = wins;
            lossesEl.textContent = losses;
            playerEl.textContent = player.name + ": $" + player.chips;
        }
