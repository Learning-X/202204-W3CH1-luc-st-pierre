import Personaje from "../Personaje.js";

const getPersonajesProperties = () => {
  const templatePersonaje = new Personaje();
  const props = Object.getOwnPropertyNames(templatePersonaje);
  // console.log(props);
  return props;
};

export default getPersonajesProperties;
