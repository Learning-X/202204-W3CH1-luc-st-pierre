import Personaje from "../Personaje.js";

// 1. Got properties from Personaje class
// 2. Got to get own properties for each instance personajes
// 3. Renamed name variables and function for confusion,
// 4  Extracted, (filter) personaje own properties from Personaje class

const getPersonajeProperties = (personaje) => {
  const personajeClassProperties = Object.getOwnPropertyNames(personaje);

  const instancePersonaje = new Personaje();
  const instancePersonajeProperties =
    Object.getOwnPropertyNames(instancePersonaje);

  // need to Not include properties from personajeClassProperties
  const personajeProperties = personajeClassProperties.filter(
    (prop) => !instancePersonajeProperties.includes(prop)
  );

  // console.log(props);
  return personajeProperties;
};

export default getPersonajeProperties;
