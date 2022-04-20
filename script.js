const API_Characters = "https://rickandmortyapi.com/api/character";
const displayNames = document.querySelector(".names");
const form = document.querySelector(".form");
const input = document.querySelector(".input");

// console.log(enteredValue.textContent);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const fetchCharacters = async () => {
  // fetchowanie danych
  const response = await fetch(API_Characters);
  const data = await response.json();
  console.log(response);
  console.log(data);
  const values = Object.values(data.results);
  console.log(values);
  // TABLICA ZAMIENIANA W LISTE
  const listedNames = values.map((curr) => `<li>${curr.name}</li>`);
  displayNames.innerHTML = listedNames.sort();

  // Potwierdzenie formularza
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const filteredNames = listedNames.filter((el) => el.includes(input.value));
    displayNames.innerHTML = filteredNames;
    if (input.value === "") {
      alert("name can not be empty");
    }
    // if (!filteredNames.includes(input.value)) {
    //   alert("this kind of name doesn't exists on the list");
    // }
  });
};

fetchCharacters();
