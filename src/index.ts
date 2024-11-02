const fronts = document.querySelectorAll(".memory-card");
const overlay = document.querySelector(".overlay");
const closeOverlay = document.querySelector(".close");
let flippedCards: HTMLElement[] = [];

fronts.forEach((element) => {
  const card = element as HTMLElement;

  card.addEventListener("click", () => {
    if (card.classList.contains("flip") || flippedCards.length === 2) return;

    card.classList.add("flip");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;
      const cardValue1 = card1.dataset.card;
      const cardValue2 = card2.dataset.card;

      if (cardValue1 === cardValue2) {
        flippedCards = [];
      } else {
        setTimeout(() => {
          card1.classList.remove("flip");
          card2.classList.remove("flip");

          flippedCards = [];
        }, 1000);
      }
    }
    flippedCardDeck();
  });
});

const flippedCardDeck = () => {
  let cardDeck: HTMLElement[] = Array.from(fronts) as HTMLElement[];

  console.log(cardDeck);

  const allFlippedCards = cardDeck.every((card) =>
    card.classList.contains("flip")
  );

  if (allFlippedCards) {
    console.log("you won");
    if (overlay) {
      (overlay as HTMLElement).style.display = "block";

      closeOverlay.addEventListener("click", () => {
        (overlay as HTMLElement).style.display = "none";
        if (closeOverlay) {
          location.reload();
        }
      });
    }
  }
};

// Om hela kortleken har klassen flipped då du vunnit.
// Vi behöver kontrollera först hela arrayen där alla kort finns
