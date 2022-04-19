import Asesor from "../personajes/Asesor.js";
import Escudero from "../personajes/Escudero.js";
import Luchador from "../personajes/Luchador.js";
import Rey from "../personajes/Rey.js";

const initPersonajes = () => {
  const personajes = [];

  const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
  const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
  const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
  const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
  const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

  personajes.push(joffrey, jaime, daenerys, tyrion, bronn);

  return personajes;
};

export default initPersonajes;
