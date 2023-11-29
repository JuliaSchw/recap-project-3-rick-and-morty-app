const cardContainer = document.querySelector('[data-js="card-container"]');

export function CharacterCard() {
  const data = fetchData();
  cardContainer.innerHTML += `<li class="card">
    <div class="card__image-container">
      <img
        class="card__image"
        src="${data.url}"
        alt="${data.name}"
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${data.name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${data.status}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${data.type}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">25</dd>
      </dl>
    </div>
  </li>`;
}

CharacterCard();

async function fetchData() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data.results;
}

fetchData();
