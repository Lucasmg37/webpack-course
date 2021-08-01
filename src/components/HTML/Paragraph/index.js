import HTML from "..";

class Paragraph extends HTML {

  constructor(text, className) {
    super(document.createElement('p'), className);
    this.element.innerHTML = text;
  }

}
export default Paragraph;