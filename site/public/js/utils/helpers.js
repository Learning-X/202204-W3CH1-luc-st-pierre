import Asesor from "../personajes/Asesor.js";
import Escudero from "../personajes/Escudero.js";

import Personaje from "./Personaje.js";

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
