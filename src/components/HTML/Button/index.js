import HTML from "..";

class Button extends HTML {

  constructor(className, elements = []) {
    super(document.createElement('button'), className);
    if (Array.isArray(elements)) {
      elements.forEach(element => this.element.appendChild(element))
    } else if (elements) {
      this.element.innerHTML = elements;
    }
  }

}
export default Button;