import Personaje from "./Personaje.js";

// 1. Got properties from Personaje class
// 2. Got to get own properties for each instance personajes
// 3. Renamed name variables and function for confusion,
// 4. Filtered personaje own properties from Personaje class
// 5.

const getPersonajeProperties = (personaje) => {
  const personajeClassProperties = Object.getOwnPropertyNames(personaje);

  const instancePersonaje = new Personaje();

  const instancePersonajeProperties =
    Object.getOwnPropertyNames(instancePersonaje);

  const personajeProperties = personajeClassProperties.filter(
    (prop) => !instancePersonajeProperties.includes(prop)
  );

  const personajeAttributes = personajeProperties.map((personajeProperty) => {
    return `${personajeProperty}: ${personaje[personajeProperty]}`;
  });

  // console.log(personaje);
  // console.log(personajeAttributes);
  return personajeAttributes;
};

export default getPersonajeProperties;
