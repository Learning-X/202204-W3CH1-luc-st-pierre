import Component from "./Component.js";

class Card extends Component {
  constructor(
    parentElement,
    className,
    htmlTag,
    personaje,
    personajeProperties
  ) {
    super(parentElement, className, htmlTag);

    this.render(personaje);
    this.renderPersonajeProperties(personajeProperties);
  }

  render(personaje) {
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
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
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
}
export default Card;
