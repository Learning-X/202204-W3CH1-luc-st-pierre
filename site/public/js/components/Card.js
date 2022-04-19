import Component from "./Component.js";

// 1. will start by creating a Card component
// 2. will need to render content
// 3. will need a personaje object for character__card
// 4. will need to destructure personaje
class Card extends Component {
  constructor(parentElement, className, htmlTag, personaje) {
    super(parentElement, className, htmlTag);

    this.render(personaje);
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
                  <li>Años de reinado: X</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
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
}
export default Card;
