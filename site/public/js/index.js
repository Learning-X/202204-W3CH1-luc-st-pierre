import Card from "./components/Card.js";
import initPersonajes from "./personajes.js";

// 1. will need to add each new Personaje to DOM to a parent container
// 2. will need to pass personaje to Card component

const personajes = initPersonajes();
const liContainer = document.querySelector(".app.container ul");

personajes.forEach((personaje) => {
  const card = new Card(liContainer, "character col", "li", personaje);
});
