import AnimaNumbers from "./anima-numbers.js";

export default function fetchAnimals(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("animal_number");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  const numbersGrid = document.querySelector(target);
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numbersGrid.appendChild(divAnimal);
  }

  function animaAnimalNumbers() {
    const animaNumbers = new AnimaNumbers(
      "[data-number]",
      ".numbers",
      "active"
    );
    animaNumbers.init();
  }

  async function createAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();

      animalsJSON.forEach((animal) => fillAnimals(animal));
      animaAnimalNumbers();
    } catch (error) {
      console.log(error);
    }
  }

  return createAnimals();
}
