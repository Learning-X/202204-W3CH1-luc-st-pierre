export default class Component {
  element;

  constructor(parentElement, className, htmlTag) {
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    parentElement.appendChild(this.element);
  }
}
