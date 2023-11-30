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
// Data
let maxPage = 1;
let page = 1;
const searchQuery = "";

const characters = await fetchData();

async function fetchData() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character?page=${page}"
  );
  const data = await response.json();
  maxPage = data.info.pages;
  return data.results;
}
pagination.textContent = `${page} / ${maxPage}`;
characters.forEach((character) => {
  CharacterCard(
    character.image,
    character.name,
    character.status,
    character.type,
    character.episode.length
  );
});
