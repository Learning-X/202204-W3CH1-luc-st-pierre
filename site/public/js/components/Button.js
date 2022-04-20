import Component from "./Component.js";

export default class Button extends Component {
  constructor(parentElement, className, text, actions) {
    super(parentElement, className, "button");

    this.render(text);
    this.addEventListener(actions);
  }

  render(text) {
    this.element.textContent = text;
  }

  addEventListener(actions) {
    actions.forEach((action) => {
      this.element.addEventListener(action.event, action.action);
    });
  }
}
