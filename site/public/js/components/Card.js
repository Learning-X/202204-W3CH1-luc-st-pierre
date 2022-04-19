import Button from "./Button.js";
import Component from "./Component.js";

class Card extends Component {
  constructor(
    parentElement,
    className,
    htmlTag,
    personaje,
    personajeProperties,
    buttons
  ) {
    super(parentElement, className, htmlTag);

    this.renderCard(personaje);
    this.renderPersonajeProperties(personajeProperties);
    this.renderPersonajeEmojis(personaje);
    this.renderPersonajeState(personaje);
    this.renderButtons(buttons);
  }

  renderCard(personaje) {
    this.element.innerHTML = `
      <div class="card character__card">
            <img
              src="img/${personaje.nombre.toLowerCase()}.jpeg"
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${personaje.nombre} y ${
      personaje.familia
    }</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${personaje.edad} años</li>
                  <li>
                    Estado:
                
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                </ul>
                <div class="character__actions">
                </div>
              </div>
            </div>
          </div>
    `;
  }

  renderPersonajeProperties(personajeProperties) {
    const characterOverlay = this.element.querySelector(
      ".character__overlay .list-unstyled"
    );

    personajeProperties.forEach((prop) => {
      const personajeProperty = document.createElement("li");
      personajeProperty.textContent = prop;
      characterOverlay.append(personajeProperty);
    });
  }

  renderPersonajeEmojis(personaje) {
    const emojiContainer = this.element.querySelector(".card.character__card");
    const emojiElement = document.createElement("i");
    emojiElement.className = "emoji";
    emojiContainer.append(emojiElement);

    switch (personaje.constructor.name) {
      case "Rey":
        emojiElement.textContent = "👑";
        break;

      case "Luchador":
        emojiElement.textContent = "🗡";
        break;

      case "Escudero":
        emojiElement.textContent = "🛡";
        break;

      case "Asesor":
        emojiElement.textContent = " 🎓";
        break;

      default:
        break;
    }
  }

  renderPersonajeState(personaje) {
    const personajeInfo = this.element.querySelector(
      ".list-unstyled li:nth-child(2)"
    );
    const icon = document.createElement("i");
    icon.className = personaje.vivo ? "fas fa-thumbs-up" : "fas fa-thumbs-down";
    personajeInfo.append(icon);
  }

  renderButtons(buttons) {
    const personajeActions = this.element.querySelector(".character__actions");

    buttons.forEach((btn) => {
      const button = new Button(
        personajeActions,
        "character__action btn",
        btn.text,
        [{ event: "click", action: btn.action }]
      );
      return button;
    });
  }
}
export default Card;
