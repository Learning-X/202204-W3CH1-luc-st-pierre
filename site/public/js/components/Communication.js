import Component from "./Component.js";

export default class Communication extends Component {
  constructor(parentElement, className, htmlTag) {
    super(parentElement, className, htmlTag);

    this.render();
  }

  render() {
    this.element.innerHTML = `
      <p class="comunications__text display-1">Una frase que dice alguien</p>
      <img
        class="comunications__picture"
        src="img/no-one.jpg"
        alt="Nombre y familia del que habla"
      />
    `;
  }
}
