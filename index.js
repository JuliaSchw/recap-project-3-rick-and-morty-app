import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const searchInput = document.querySelector('[data-js="search-input"]');
// Data
// Why do we get the data for maxPage from the URL even though we only returned data.results?
let maxPage = 1;
let page = 1;
let searchQuery = "";

async function fetchData() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();
  maxPage = data.info.pages;

  return data.results;
}

async function fetchCharacters() {
  const characters = await fetchData();

  cardContainer.innerHTML = "";

  characters.forEach((character) => {
    CharacterCard(
      character.image,
      character.name,
      character.status,
      character.type,
      character.episode.length
    );
  });
  pagination.textContent = `${page} / ${maxPage}`;
}

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = searchInput.value;
  page = 1;
  fetchCharacters();
});

fetchCharacters();
