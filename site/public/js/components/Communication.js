import Component from "./Component.js";

export default class ButtonComponent extends Component {
  constructor(parentElement, className, htmlTag) {
    super(parentElement, className, htmlTag);

    this.render();
  }
}
