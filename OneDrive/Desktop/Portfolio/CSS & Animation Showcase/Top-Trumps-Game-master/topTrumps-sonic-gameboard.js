//CARDS//

const cards = [
  {
    name: "SONIC",
    background: "imgs/sonicGame/sonic.jpg",
    stats: {
      speed: 180,
      strength: 30,
      danger: 5,
      debut: 1991,
      topTrumpRating: 8,
    },
  },
  {
    name: "KNUCKLES",
    background: "imgs/sonicGame/knuckles.webp",
    stats: {
      speed: 90,
      strength: 170,
      danger: 6,
      debut: 1994,
      topTrumpRating: 7,
    },
  },
  {
    name: "TAILS",
    background: "imgs/sonicGame/tails.jpg",
    stats: {
      speed: 100,
      strength: 50,
      danger: 3,
      debut: 1992,
      topTrumpRating: 6,
    },
  },
  {
    name: "DR. EGGMAN",
    background: "imgs/sonicGame/eggman3.jpg",
    stats: {
      speed: 40,
      strength: 100,
      danger: 9,
      debut: 1991,
      topTrumpRating: 5,
    },
  },
  {
    name: "AMY ROSE",
    background: "imgs/sonicGame/amyrose.jpg",
    stats: {
      speed: 70,
      strength: 85,
      danger: 4,
      debut: 1993,
      topTrumpRating: 6,
    },
  },
  {
    name: "SHADOW",
    background: "imgs/sonicGame/shadow.jpg",
    stats: {
      speed: 170,
      strength: 150,
      danger: 8,
      debut: 2001,
      topTrumpRating: 9,
    },
  },
  {
    name: "ROUGE",
    background: "imgs/sonicGame/rouge.jpg",
    stats: {
      speed: 95,
      strength: 90,
      danger: 6,
      debut: 2001,
      topTrumpRating: 6,
    },
  },
  {
    name: "SILVER",
    background: "imgs/sonicGame/silver.jpg",
    stats: {
      speed: 110,
      strength: 140,
      danger: 7,
      debut: 2006,
      topTrumpRating: 7,
    },
  },
  {
    name: "METAL SONIC",
    background: "imgs/sonicGame/metalSonic.jpg",
    stats: {
      speed: 175,
      strength: 160,
      danger: 9,
      debut: 1993,
      topTrumpRating: 8,
    },
  },
  {
    name: "WEREHOG",
    background: "imgs/sonicGame/werehog.jpg",
    stats: {
      speed: 160,
      strength: 120,
      danger: 8,
      debut: 2008,
      topTrumpRating: 8,
    },
  },
  {
    name: "BLAZE",
    background: "imgs/sonicGame/blaze.jpg",
    stats: {
      speed: 120,
      strength: 95,
      danger: 6,
      debut: 2005,
      topTrumpRating: 7,
    },
  },
  {
    name: "VECTOR",
    background: "imgs/sonicGame/vector.jpg",
    stats: {
      speed: 65,
      strength: 130,
      danger: 5,
      debut: 1995,
      topTrumpRating: 6,
    },
  },
  {
    name: "CHAOS",
    background: "imgs/sonicGame/chaos.jpg",
    stats: {
      speed: 85,
      strength: 180,
      danger: 10,
      debut: 1998,
      topTrumpRating: 8,
    },
  },
  {
    name: "INFINITE",
    background: "imgs/sonicGame/infinite.jpg",
    stats: {
      speed: 160,
      strength: 140,
      danger: 10,
      debut: 2017,
      topTrumpRating: 9,
    },
  },
  // {
  //   name: "OTIS",
  //   background: "imgs/sonicGame/OTIS.jpg",
  //   stats: {
  //     speed: 1000,
  //     strength: 400,
  //     danger: 20,
  //     debut: 2019,
  //     topTrumpRating: 10,
  //   },
  // },
  // {
  //   name: "Nonno",
  //   background: "imgs/sonicGame/nonno.jpg",
  //   stats: {
  //     speed: 60,
  //     strength: 8,
  //     danger: 3,
  //     debut: 1966,
  //     topTrumpRating: 5,
  //   },
  // },

  // {
  //   name: "Crazy Pants",
  //   background: "imgs/sonicGame/crazypants.jpg",
  //   stats: {
  //     speed: 1000,
  //     strength: 20,
  //     danger: 20,
  //     debut: 1994,
  //     topTrumpRating: 6,
  //   },
  // },

  // {
  //   name: "Santo",
  //   background: "imgs/sonicGame/Santo.jpg",
  //   stats: {
  //     speed: 100,
  //     strength: 12,
  //     danger: 2,
  //     debut: 1937,
  //     topTrumpRating: 8,
  //   },
  // },
];

// GLOBAL VARIABLES //

let playerDeck = [];
let computerDeck = [];
lastRoundResult = "tie";
let gameIsOver = false;
// let maxScore = 14; // Removed duplicate declaration

//FISHER-YATES SHUFFLE//
function shuffleDeck(deck) {
  const shuffled = [...deck];
  console.log(shuffled);
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

window.addEventListener("DOMContentLoaded", () => {
  // Shuffle full card set
  const shuffledDeck = shuffleDeck(cards);
  const mid = Math.floor(shuffledDeck.length / 2);

  // Split into two decks
  playerDeck = shuffledDeck.slice(0, mid);
  computerDeck = shuffledDeck.slice(mid);

  // Render top card for both players
  renderCard(playerDeck[0], ".player-1-card");
  renderCard(computerDeck[0], ".player-2-card");

  console.log("Player Deck:", [...playerDeck]);
  console.log("Computer Deck:", [...computerDeck]);
});

//REMOVE START BUTTON AND PLAYER 1 COVER //
function renderCard(card, selector) {
  const cardElement = document.querySelector(selector);
  if (!cardElement) {
    console.warn("Card element not found for selector:", selector);
    return;
  }

  const cardBody = cardElement.querySelector(".card-body");
  if (cardBody) {
    cardBody.style.background = `url(${card.background})`;
    cardBody.style.backgroundSize = "cover";
    cardBody.style.backgroundPosition = "center";
  } else {
    console.warn(`.card-body not found inside ${selector}`);
  }

  cardElement.querySelector(".card-name").textContent = card.name;
  cardElement.querySelector(".speed-value").textContent = `${card.stats.speed}`;
  cardElement.querySelector(
    ".strength-value"
  ).textContent = `${card.stats.strength}`;
  cardElement.querySelector(
    ".danger-value"
  ).textContent = `${card.stats.danger}`;
  cardElement.querySelector(".debut-value").textContent = `${card.stats.debut}`;
  cardElement.querySelector(
    ".top-trumps-rating-value"
  ).textContent = `${card.stats.topTrumpRating}`;
}

function startGame() {
  const cardCover = document.querySelector(".card-cover-1");
  const cardCover2 = document.querySelector(".card-cover-2");
  const startButton = document.getElementById("board-button-start");

  document
    .getElementById("board-button-start")
    .addEventListener("click", () => {
      if (cardCover) cardCover.classList.add("rocket-out");
      if (cardCover2) cardCover2.classList.remove("rocket-out");
      if (startButton) startButton.style.display = "none";

      console.log("Player Deck:", [...playerDeck]);
      console.log("Computer Deck:", [...computerDeck]);
    });
}

startGame();

//CLICK AND HOLD HIGHLIGHTED CHOICE//
const statItems = document.querySelectorAll(
  `.player-1-card .stat-item-container`
);

let statSelected = false;

statItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (statSelected) return;

    const selectedStat = item.getAttribute("data-stat");

    markSelectedStat(item, statItems);
    statSelected = true;

    statItems.forEach((item) => {
      item.style.pointerEvents = "none"; // disables clicking entirely
    });

    revealComputerCard();
    highlightOpponentStat(selectedStat);
    disableAndSelectOpponentStat(selectedStat);

    const result = determineRoundResult(selectedStat);
    applyResultColors(selectedStat, result);
    countdown();
    evaluateRound(result);
    scoreIncrease(result);
    console.log(result);
  });
});

function markSelectedStat(selectedItem, allItems) {
  allItems.forEach((item) => {
    if (item !== selectedItem) {
      item.classList.add("disabled");
    } else {
      item.classList.add("selected");
    }
  });
}

function resetSelection(selectedItem, allItems) {
  allItems.forEach((item) => {
    if (item !== selectedItem) {
      item.classList.add("reset");
    }
  });
}

function revealComputerCard() {
  const cardCover2 = document.querySelector(".card-cover-2");
  if (cardCover2) {
    cardCover2.classList.add("rocket-out");
  }
}

function highlightOpponentStat(stat) {
  const matchingStat = document.querySelector(
    `.player-2-card .stat-item-container[data-stat="${stat}"]`
  );
  if (matchingStat) {
    matchingStat.classList.add("highlighted");
  } else {
    console.log("No matching stat found for:", stat);
  }
}

function disableAndSelectOpponentStat(stat) {
  const opponentStats = document.querySelectorAll(
    `.player-2-card .stat-item-container`
  );
  opponentStats.forEach((item) => {
    if (item.getAttribute("data-stat") === stat) {
      item.classList.remove("disabled", "highlighted");
      item.classList.add("selected");
      // Enable pointer events just in case
      item.style.pointerEvents = "none";
    } else {
      item.classList.add("disabled");
      item.classList.remove("selected", "highlighted");
      // Disable pointer events
      item.style.pointerEvents = "none";
    }
  });
}
function determineRoundResult(selectedStat) {
  const playerCard = playerDeck[0];
  const computerCard = computerDeck[0];

  console.log("Selected stat:", selectedStat);
  console.log("Player card:", playerCard);
  console.log("Computer card:", computerCard);

  const statValuePlayer = Number(playerCard.stats[selectedStat]);
  const statValueComputer = Number(computerCard.stats[selectedStat]);

  console.log("Player stat:", statValuePlayer, typeof statValuePlayer);
  console.log("Computer stat:", statValueComputer, typeof statValueComputer);

  const isReverseStat = selectedStat === "debut";

  if (statValuePlayer === statValueComputer) {
    return "tie";
  } else if (
    (!isReverseStat && statValuePlayer > statValueComputer) ||
    (isReverseStat && statValuePlayer < statValueComputer)
  ) {
    return "playerWin";
  } else {
    return "computerWin";
  }
}

function applyResultColors(stat, result) {
  const playerStatEl = document.querySelector(
    `.player-1-card .stat-item-container[data-stat="${stat}"]`
  );
  const computerStatEl = document.querySelector(
    `.player-2-card .stat-item-container[data-stat="${stat}"]`
  );

  if (result === "tie") {
    playerStatEl.classList.add("tie");
    computerStatEl.classList.add("tie");
  } else if (result === "playerWin") {
    playerStatEl.classList.add("win");
    computerStatEl.classList.add("lose");
  } else if (result === "computerWin") {
    playerStatEl.classList.add("lose");
    computerStatEl.classList.add("win");
  }
}

////////////////////////////////////////////////////////////////////////////////////SCORE CHANGES ////////////////////////////////////////////////////////////////////////////////////

const totalRings = 14;
const maxScore = 7; // each player starts with 7 rings

function updateScoreRings(player1Score, player2Score) {
  const rings = document.querySelectorAll(".health-bar .ring-icon");
  const totalRings = rings.length;

  rings.forEach((ring, index) => {
    ring.classList.remove("player-increase", "cpu-increase");

    // Player 1 highlights from left side (start)
    if (index < player1Score) {
      ring.classList.add("player1-increase");
    }

    // Player 2 highlights from right side (end)
    if (index >= totalRings - player2Score) {
      ring.classList.add("cpu-increase");
    }
  });
}

function scoreIncrease(lastRoundResult) {
  if (gameIsOver) return;

  const player1ScoreEl = document.querySelector(
    ".scoreboard-player-1 .player-score"
  );
  const player2ScoreEl = document.querySelector(
    ".scoreboard-cpu .player-score"
  );

  if (!player1ScoreEl || !player2ScoreEl) {
    console.error("Score elements not found");
    return;
  }

  let player1Score = parseInt(player1ScoreEl.textContent, 10);
  let player2Score = parseInt(player2ScoreEl.textContent, 10);

  if (isNaN(player1Score)) player1Score = maxScore;
  if (isNaN(player2Score)) player2Score = maxScore;

  if (lastRoundResult === "playerWin") {
    player1Score++;
    player2Score--;
  } else if (lastRoundResult === "computerWin") {
    player1Score--;
    player2Score++;
  }

  //  // Clamp scores
  //   player1Score = Math.max(0, Math.min(totalRings, player1Score));
  //   player2Score = Math.max(0, Math.min(totalRings, player2Score));

  player1ScoreEl.textContent = player1Score;
  player2ScoreEl.textContent = player2Score;

  player1Score = Math.max(0, Math.min(14, player1Score));
  player2Score = Math.max(0, Math.min(14, player2Score));

  updateScoreRings(player1Score, player2Score);
  updateResult(lastRoundResult);
  gameWinner(player1Score, player2Score);

  // }
}
function updateResult(lastRoundResult) {
  const cpuMsg = document.getElementById("cpu-result-output");
  const player1Msg = document.getElementById("player-1-result-output");
  if (!cpuMsg) return;
  if (!player1Msg) return;

  if (lastRoundResult === "playerWin") {
    player1Msg.style.textContent = "YOU WIN";
    player1Msg.style.color = "#4caf50";
    cpuMsg.textContent = "YOU LOSE";
    cpuMsg.style.color = "#ff1100";
  } else if (lastRoundResult === "computerWin") {
    cpuMsg.textContent = "YOU WIN";
    cpuMsg.style.color = "#4caf50";
    player1Msg.textContent = "YOU LOSE";
    player1Msg.style.color = "#ff1100";
  } else if (lastRoundResult === "tie") {
    cpuMsg.textContent = "DRAW";
    cpuMsg.style.color = "#f1b158";
    player1Msg.textContent = "DRAW";
    player1.style.color = "#f1b158";
  }

  console.log(lastRoundResult);
}

function countdown() {
  const nextRoundButton = document.getElementById("board-button-countdown");

  if (nextRoundButton) {
    nextRoundButton.style.opacity = "1";
    nextRoundButton.style.transition = "opacity 1s ease";
    nextRoundButton.innerText = "3";

    setTimeout(() => (nextRoundButton.innerText = "2"), 500);
    setTimeout(() => (nextRoundButton.innerText = "1"), 1500);
    statSelected = false;
    setTimeout(() => (nextRoundButton.innerText = "GO!"), 2500);

    setTimeout(() => {
      nextRoundButton.innerText = ""; // Hide content, not the element
      nextRoundButton.style.opacity = "0"; // Just fade it out
      proceedToNextRound();
    }, 4000);
  }
}

function evaluateRound(result) {
  // Get the top cards (currently in play)
  const playerCard = playerDeck.shift(); // Remove top card from player deck
  const computerCard = computerDeck.shift(); // Remove top card from computer deck

  if (result === "playerWin") {
    // Player wins: add both cards to bottom of player deck
    playerDeck.push(playerCard, computerCard);
  } else if (result === "computerWin") {
    // Computer wins: add both cards to bottom of computer deck
    computerDeck.push(computerCard, playerCard);
  } else {
    // Tie: each player keeps their card at bottom
    playerDeck.push(playerCard);
    computerDeck.push(computerCard);
  }

  // Show the next card in each deck
}

function proceedToNextRound() {
  if (gameIsOver) return;
  console.log("proceedToNextRound called");
  const cardCover2 = document.querySelector(".card-cover-2");
  if (cardCover2) {
    cardCover2.classList.remove("rocket-out");
  }

  // RESET CLASSES FOR STATS//
  const statItems = document.querySelectorAll(".stat-item-container");
  statItems.forEach((item) => {
    item.classList.remove(
      "win",
      "lose",
      "tie",
      "disabled",
      "selected",
      "highlighted"
    );
    // Reset any selected or active states if needed //
    item.style.pointerEvents = "auto"; // Re-enable interaction if disabled //
  });

  //CLEAR RESULT//
  document.querySelectorAll(".result-message").forEach((el) => {
    el.innerText = "";
  });

  renderCurrentCards();
}

function renderCurrentCards() {
  if (gameIsOver) return;
  if (playerDeck.length > 0 && computerDeck.length > 0) {
    renderCard(playerDeck[0], ".player-1-card");
    renderCard(computerDeck[0], ".player-2-card");
  } else {
    console.log("Game Over");
  }
}

function gameWinner(player1Score, player2Score) {
  const player1Msg = document.getElementById("player-1-result-output");
  const cpuMsg = document.getElementById("cpu-result-output");

  if (!player1Msg || !cpuMsg) {
    console.warn("One or both message elements not found.");
    return;
  }

  if (player1Score === 14) {
    player1Msg.textContent = "Winner! :)";
    cpuMsg.textContent = "Loser! :(";
    endGame();
  } else if (player2Score === 14) {
    player1Msg.textContent = "Loser! :(";
    cpuMsg.textContent = "Winner! :)";
    endGame();
  } else {
    player1Msg.textContent = "";
    cpuMsg.textContent = "";
  }
}

function endGame() {
  gameIsOver = true;
  // Disable all player 1 stat items
  const statItems = document.querySelectorAll(
    ".player-1-card .stat-item-container"
  );
  statItems.forEach((item) => {
    item.style.pointerEvents = "none";
    item.classList.add("disabled");
  });

  const statItems2 = document.querySelectorAll(
    ".player-2-card .stat-item-container"
  );
  statItems2.forEach((item) => {
    item.style.pointerEvents = "none";
    item.classList.add("disabled");
  });
  restartGame();
  statSelected = true;
}

function restartGame() {
  const restartButton = document.getElementById("board-button-restart");
  restartButton.style.opacity = "1";
  if (restartButton) {
    restartButton.addEventListener("click", () => {
      location.reload();
    });
  }
}
