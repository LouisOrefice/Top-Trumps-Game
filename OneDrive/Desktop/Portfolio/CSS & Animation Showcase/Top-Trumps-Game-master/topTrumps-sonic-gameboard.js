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
  {
    name: "OTIS",
    background: "imgs/sonicGame/OTIS.jpg",
    stats: {
      speed: 1090,
      strength: 400,
      danger: 20,
      debut: 2019,
      topTrumpRating: 10,
    },
  },
];

// GLOBAL VARIABLES //

let playerDeck = [];
let computerDeck = [];

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

//REMOVE START BUTTON AND PLAYER 1 COVER //
document.getElementById("board-button-start").addEventListener("click", () => {
  const cardCover = document.querySelector(".card-cover-1");
  const startButton = document.getElementById("board-button-start");
  if (cardCover) cardCover.classList.add("rocket-out");
  if (startButton) startButton.style.display = "none";

  // SHUFFLE AND DEAL //
  const shuffledDeck = shuffleDeck(cards);
  const mid = Math.floor(shuffledDeck.length / 2);
  // console.log(mid);
  playerDeck = shuffledDeck.slice(0, mid);
  // console.log(playerDeck);

  computerDeck = shuffledDeck.slice(mid);
  // console.log(computerDeck);

  //RENDER CARDS//

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
    cardElement.querySelector(
      ".speed-value"
    ).textContent = `${card.stats.speed}`;
    cardElement.querySelector(
      ".strength-value"
    ).textContent = `${card.stats.strength}`;
    cardElement.querySelector(
      ".danger-value"
    ).textContent = `${card.stats.danger}`;
    cardElement.querySelector(
      ".debut-value"
    ).textContent = `${card.stats.debut}`;
    cardElement.querySelector(
      ".top-trumps-rating-value"
    ).textContent = `${card.stats.topTrumpRating}`;
  }

  // SHOW FIRST CARDS //
  renderCard(playerDeck[0], ".player-1-card");
  renderCard(computerDeck[0], ".player-2-card");

  console.log(playerDeck);
  console.log(computerDeck);
});

//STATS ANIMATIONS //

//CLICK AND HOLD HIGHLIGHTED CHOICE//

const statItems = document.querySelectorAll(`.stat-item-container`);
console.log("statItems found:", statItems.length);

let statSelected = false; //TRACK IF THE STAT HAS BEEN SELECTED //
statItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (statSelected) {
      //IF ALREADY SELECTED, IGNORE CLICKS ON OTHER STATS//
      return;
    }

    //MARK THE ITEM AS SELECTED/

    statItems.forEach((i) => {
      if (i !== item) {
        i.classList.add("disabled");
      } else {
        i.classList.add("selected");
      }
    });

    statSelected = true;
    //REMOVE PLAYER 2 COVER AFTER STAT SELECTION //
    const cardCover2 = document.querySelector(".card-cover-2");
    if (cardCover2) {
      cardCover2.classList.add("rocket-out");
    }

    // HIGHLIGHT THE SAME STAT //
    const selectedStat = item.getAttribute("data-stat");
    if (selectedStat) {
      const matchingStat = document.querySelector(
        `.player-2-card .stat-item-container[data-stat="${selectedStat}"]`
      );
      if (matchingStat) {
        matchingStat.classList.add("highlighted");
      } else {
        console.log("No matching stat found for:", selectedStat);
      }
    }

    // DISABLE OTHER STATS//
    if (selectedStat) {
      const matchingStat = document.querySelector(
        `.player-2-card .stat-item-container[data-stat ="${selectedStat}"]`
      );

      if (matchingStat) {
        console.log(matchingStat);
        matchingStat.classList.remove("disabled");
        matchingStat.classList.remove("highlighted");
        matchingStat.classList.add("selected");
      }
    }

    //COLOR INDICATOR WIN/LOSE/TIE

    const statValuePlayer = playerDeck[0].stats[selectedStat];
    const statValueComputer = computerDeck[0].stats[selectedStat];

    const playerStatEl = document.querySelector(
      `.player-1-card .stat-item-container[data-stat="${selectedStat}"]`
    );
    const computerStatEl = document.querySelector(
      `.player-2-card .stat-item-container[data-stat="${selectedStat}"]`
    );

    // Handle 'debut' as a reverse stat (lower is better)
    const isReverseStat = selectedStat === "debut";

    let result;
    if (statValuePlayer === statValueComputer) {
      result = "tie";
    } else if (
      (!isReverseStat && statValuePlayer > statValueComputer) ||
      (isReverseStat && statValuePlayer < statValueComputer)
    ) {
      result = "playerWin";
    } else {
      result = "computerWin";
    }

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
    scoreIncrease(result);
    console.log(result);
  });
});

// SCORE CHANGES //

const totalRings = 14;
const maxScore = 7; // each player starts with 7 rings

function updateScoreRings(player1Score, player2Score) {
  const rings = document.querySelectorAll(".health-bar .ring-icon");

  rings.forEach((ring, index) => {
    ring.classList.remove("player-increase", "cpu-increase");

    // Player 1 highlights from left side (start)
    if (index === player1Score - 1) {
      ring.classList.add("player1-increase");
    }

    // Player 2 highlights from right side (end)
    if (index === totalRings - player2Score) {
      ring.classList.add("cpu-increase");
    }
  });
}

function updatePlayer1Result(player1Score, player2Score) {
  const player1Msg = document.getElementById("player-1-result-output");
  if (!player1Msg) return;

  if (player1Score > player2Score) {
    player1Msg.textContent = "YOU WIN";
    player1Msg.style.color = "#4caf50";
  } else if (player1Score < player2Score) {
    player1Msg.textContent = "YOU LOSE";
    player1Msg.style.color = "#ff1100";
  } else {
    player1Msg.textContent = "DRAW";
    player1Msg.style.color = "#f1b158";
  }
}

function updateCPUResult(player1Score, player2Score) {
  const cpuMsg = document.getElementById("cpu-result-output");
  if (!cpuMsg) return;

  if (player2Score > player1Score) {
    cpuMsg.textContent = "YOU WIN";
    cpuMsg.style.color = "#4caf50";
  } else if (player2Score < player1Score) {
    cpuMsg.textContent = "YOU LOSE";
    cpuMsg.style.color = "#ff1100";
  } else {
    cpuMsg.textContent = "DRAW";
    cpuMsg.style.color = "#f1b158";
  }
}

function scoreIncrease(result) {
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

  if (result === "playerWin") {
    player1Score++;
    player2Score--;
  } else if (result === "computerWin") {
    player1Score--;
    player2Score++;
  }

  player1ScoreEl.textContent = player1Score;
  player2ScoreEl.textContent = player2Score;

  updateScoreRings(player1Score, player2Score);
  updatePlayer1Result(player1Score, player2Score);
  updateCPUResult(player1Score, player2Score);

  // }
}

// WHAT IS THE WINNING CARD?//
let winningPlayer;

if (player1Score > player2Score) {
  winningPlayer = player1;
} else if (player2Score > player1Score) {
  winningPlayer = cpu; // Assuming 'cpu' is your other player variable
} else {
  winningPlayer = null; // It's a tie or no winner
}

let winningCard;

if (player - 1 - card)
  // WINNING CARD GIVEN TO PLAYER OR CPU DECK - ADDED TO THE DECK

  function giveWinningCardToPlayer(winningCard, winningPlayer) {
    if (!winningPlayer.hand) {
      winningPlayer.hand = [];
    }
    winningPlayer.hand.push(winningCard);
  }

// Proceed to next round and nextRound functions should be defined at top-level, not nested.
// Remove duplicate or misplaced function definitions here.

// If you want to expose nextRound and proceedToNextRound globally, define them outside this block.
