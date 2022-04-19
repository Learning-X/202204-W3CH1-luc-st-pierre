import Card from "./components/Card.js";
import Communication from "./components/Communication.js";
import initPersonajes from "./utils/personajes.js";
import getPersonajeProperties, {
  hablaButtonAction,
  muereButtonAction,
} from "./utils/helpers.js";

const personajes = initPersonajes();
const liContainer = document.querySelector(".app.container ul");
const communicator = new Communication(document.body, "div", "comunication");

personajes.forEach((personaje) => {
  const properties = getPersonajeProperties(personaje);
  const hablaButton = { text: "habla", action: hablaButtonAction };
  const muereButton = { text: "muere", action: muereButtonAction };
  const buttons = [hablaButton, muereButton];
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
