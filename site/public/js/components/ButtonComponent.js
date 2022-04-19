import Component from "./Component.js";

class ButtonComponent extends Component {
  constructor(parentElement, className, text, actions) {
    super(parentElement, className);

    this.render(text);
    this.addEventListeners(actions);
  }

  render(text) {
    this.element.text = text;
  }

  addEventListeners(actions) {
    this.element.addEventListeners("click", actions);
  }
}
