import Card from "./components/Card.js";
import Communication from "./components/Communication.js";
import initPersonajes from "./utils/personajes.js";
import getPersonajeProperties from "./utils/helpers.js";

const personajes = initPersonajes();
const liContainer = document.querySelector(".app.container ul");
const communicator = new Communication(document.body, "div", "comunication");

personajes.forEach((personaje) => {
  const properties = getPersonajeProperties(personaje);
  const hablaButtonAction = () => {};
  const muereButtonAction = () => {};
  const buttons = [hablaButtonAction, muereButtonAction];
  const card = new Card(
    liContainer,
    "character col",
    "li",
    personaje,
    properties,
    buttons
  );
  // console.log(properties);
});
