import Personaje from "../utils/Personaje.js";

export default class Rey extends Personaje {
  anyosReinado;

  constructor(nombreRey, familiaRey, edadRey, anyosReinadoRey) {
    super(nombreRey, familiaRey, edadRey);
    this.anyosReinado = anyosReinadoRey;
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}
