import Component from "./Component.js";

class ButtonComponent extends Component {
  constructor(parentElement, className, text, actions) {
    super(parentElement, className);

    this.render(text);
  }

  render(text) {
    this.element.text = text;
  }
}
