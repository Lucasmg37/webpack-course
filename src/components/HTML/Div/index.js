import HTML from "..";

class Div extends HTML {

  constructor(className, elements = []) {
    super(document.createElement('div'), className);
    elements.forEach(element => this.element.appendChild(element))
  }

}
export default Div;