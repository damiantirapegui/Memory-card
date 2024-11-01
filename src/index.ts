const fronts = document.querySelectorAll(".memory-card");

fronts.forEach((element) => {
  const card = element as HTMLElement;
  const cardValue = card.dataset.card;

  card.addEventListener("click", () => {
    element.classList.toggle("flip");

    console.log(cardValue);
  });
});
