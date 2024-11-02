const fronts = document.querySelectorAll(".memory-card");
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
  });
});

// If sats för att kontrollera att Arrayen innehåller 2 kort.
// Desctructa båda korten som hamnar i arrayen.
// Lägg ett värde på varsit kort. TIPS använd dataset.

// Nestla if sats som kontrollerar att korten matchar.
// Om dem matchar då ska du tömma arreyen för att lägga till 2 nya kort.
// Annars om dem inte matchar då kan du ta bort (remove )card1 och card 2.
// Glöm inte att tömma arrayen här också för att börja om
