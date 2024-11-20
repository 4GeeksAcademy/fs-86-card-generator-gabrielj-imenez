/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const images = [
  "https://i.pinimg.com/474x/42/70/6e/42706e63cf1b0b087f187dc02a8ccadd.jpg",
  "https://i.pinimg.com/originals/13/1c/c4/131cc46738918de0a076aae210d8f712.gif",
  "https://i.pinimg.com/originals/d2/60/07/d26007ab6524f141ebd64ee1894af718.gif",
  "https://i.pinimg.com/474x/46/3b/fc/463bfcd6f085562ebab101c5a4105d38.jpg",
  "https://i.pinimg.com/474x/9f/72/7a/9f727ae3b50e1393620b982490257a2b.jpg"
];
const name = ["Squirtle", "Pikachu", "Charmander", "bulbasaur", "Mewtwo"];

const getPokemonRandom = () => {
  const randomPokemon = Math.floor(Math.random() * images.length);
  return images[randomPokemon];
};
const getDescriptionPokemon = pokemonImg => {
  if (pokemonImg === images[0]) {
    return "Esta pequeña tortuga Pokémon jala su largo cuello hacia su caparazón para lanzar increíbles ataques de agua con sorprendente alcance y exactitud. El golpe puede ser muy poderoso.";
  }
  if (pokemonImg === images[1]) {
    return "Parece un pequeño ratón cubierto con un abrigo amarillo. Tiene orejas largas con puntas negras, mejillas redondas de un rojo brillante y una cola grande en forma de rayo.";
  }
  if (pokemonImg === images[2]) {
    return "es un pequeño lagarto bípedo. Sus características de fuego son resaltadas por su color de piel anaranjado y su cola con la punta envuelta en llamas.";
  }
  if (pokemonImg === images[3]) {
    return "Es un Pokémon cuadrúpedo de color verde y manchas más oscuras de formas geométricas. Su cabeza representa cerca de un tercio de su cuerpo. En su frente se ubican tres manchas que pueden cambiar dependiendo del ejemplar. Tiene orejas pequeñas y puntiagudas.";
  }
  if (pokemonImg === images[4]) {
    return "Es sumamente hábil con sus poderes psíquicos: puede volar mediante la levitación, comunicarse telepáticamente, reflejar ataques como hiperrayo, bloquear las habilidades especiales de los demás Pokémon y tomar el mando de la mente de otra criatura viva mediante hipnosis.";
  }
};
const getNamePokemon = pokemonImg => {
  if (pokemonImg === images[0]) {
    return name[0];
  }
  if (pokemonImg === images[1]) {
    return name[1];
  }
  if (pokemonImg === images[2]) {
    return name[2];
  }
  if (pokemonImg === images[3]) {
    return name[3];
  }
  if (pokemonImg === images[4]) {
    return name[4];
  }
};
const setPokemonRandom = pokemonImg => {
  document.querySelector("#pokemon-img").src = pokemonImg;
  document.querySelector("#pokemon-img").alt = "Imagen de Pokémon Aleatorio";
};
const setDescriptionPokemon = pokemonText => {
  document.querySelector("#description-pokemon").innerHTML = pokemonText;
};
const setNamePokemon = pokemonName => {
  document.querySelector("#name-pokemon").innerHTML = pokemonName;
};

const pokemonRandom = () => {
  const pokemonImg = getPokemonRandom();
  const pokemonText = getDescriptionPokemon(pokemonImg);
  const pokemonName = getNamePokemon(pokemonImg);
  setPokemonRandom(pokemonImg);
  setDescriptionPokemon(pokemonText);
  setNamePokemon(pokemonName);
};
document.querySelector(".button").onclick = pokemonRandom;
