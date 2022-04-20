import Asesor from "../personajes/Asesor.js";
import Escudero from "../personajes/Escudero.js";

import Personaje from "./Personaje.js";

export const hablaButtonAction = (personaje) => {
  const personajes = document.querySelectorAll(".character__card");

  if (personaje) {
    for (const perso of personajes) {
      const personajeImage = perso.querySelector("img");
      const splittedImage = personajeImage.src.split("/");

      if (
        splittedImage[splittedImage.length - 1] ===
        `${personaje.nombre.toLowerCase()}.jpg`
      ) {
        personajeImage.classList.add("character__picture--dead");
        const iconThumb = perso.querySelector(".fas.fa-thumbs-up");
        iconThumb.className = "fas fa-thumbs-down";
        personaje.muere();
      }
    }
  }
};
hablaButtonAction();

export const muereButtonAction = () => {};

// todo - Need to get toUpperCase first letter property and a space between two word if needed
const getPersonajeProperties = (personaje) => {
  const personajeClassProperties = Object.getOwnPropertyNames(personaje);

  const instancePersonaje = new Personaje();

  const instancePersonajeProperties =
    Object.getOwnPropertyNames(instancePersonaje);

  const personajeProperties = personajeClassProperties.filter(
    (prop) => !instancePersonajeProperties.includes(prop)
  );

  const personajeAttributes = personajeProperties.map((personajeProperty) => {
    if (
      ((personaje instanceof Escudero || personaje instanceof Asesor) &&
        personajeProperty === "asesorado") ||
      personajeProperty === "sirveA"
    ) {
      return `${personajeProperty}: ${personaje[personajeProperty].nombre}`;
    }
    return `${personajeProperty}: ${personaje[personajeProperty]}`;
  });

  return personajeAttributes;
};

export default getPersonajeProperties;
