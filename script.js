const images {
    A = document.getElementById("image1");
    A = document.getElementById("image2");
    B = document.getElementById("image3");
    B = document.getElementById("image4");
    C = document.getElementById("image5");
    C = document.getElementById("image6");
    D = document.getElementById("image7");
    D = document.getElementById("image8");
    E = document.getElementById("image9");
    E = document.getElementById("image10");
    F = document.getElementById("image11");
    F = document.getElementById("image12");
    G = document.getElementById("image13");
    G = document.getElementById("image14");
    H = document.getElementById("image15");
    H = document.getElementById("image16");
}

const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
  let shuffledCards = shuffle(cards);
  let selectedCards = [];

  function createBoard() {
    const board = document.body;
    for (let i = 0; i < shuffledCards.length; i++) {
      const card = document.createElement('div');
      card.className = 'card';
      card.dataset.index = i;
      card.textContent = shuffledCards[i];
      card.addEventListener('click', handleCardClick);
      board.appendChild(card);
    }
  }

  function CardClick(event) {
    const clickedCard = event.target;
    if (selectedCards.length < 2 && !selectedCards.includes(clickedCard)) {
      selectedCards.push(clickedCard);
      clickedCard.textContent = shuffledCards[clickedCard.dataset.index];

      if (selectedCards.length === 2) {
        setTimeout(checkMatch, 1000);
      }
    }
  }

  function checkMatch() {
    const [card1, card2] = selectedCards;

    if (card1.textContent === card2.textContent) {
      card1.removeEventListener('click', CardClick);
      card2.removeEventListener('click', CardClick);
    } else {
      card1.textContent = '';
      card2.textContent = '';
    }

    selectedCards = [];
  }

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  createBoard();
