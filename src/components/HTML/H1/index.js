import HTML from "..";

class H1 extends HTML {

  constructor(text, className) {
    super(document.createElement('h1'), className);
    this.element.innerHTML = text;
  }

}
export default H1;