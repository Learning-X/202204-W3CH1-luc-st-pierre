import Luchador from "./Luchador.js";
import Personaje from "../utils/Personaje.js";

export default class Escudero extends Personaje {
  sirveA;

  pelotismo;

  constructor(
    nombreEscudero,
    familiaEscudero,
    edadEscudero,
    valorPelotismo,
    personajeSirve
  ) {
    super(nombreEscudero, familiaEscudero, edadEscudero);
    this.pelotismo = Escudero.filtrarPelotismo(valorPelotismo);
    if (personajeSirve instanceof Luchador) {
      this.sirveA = personajeSirve;
    }
  }

  static filtrarPelotismo(gradoPelotismo) {
    if (gradoPelotismo < 0) {
      return 0;
    }
    if (gradoPelotismo > 10) {
      return 10;
    }
    return gradoPelotismo;
  }

  comunicar() {
    return `${super.comunicar()}Soy un loser`;
  }
}
