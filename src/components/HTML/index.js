class HTML {

  constructor(element, className) {
    const uuidControl = `uuid-control-test`
    this.element = element;
    this.element.classList.add(uuidControl);
    this.id = uuidControl;

    if (className) {
      this.element.classList.add(className);
    }

  }

  getElement() {
    return this.element;
  }

  addChildren(children) {
    return this.element.appendChild(children);
  }

  addClass(className) {
    this.element.classList.add(className);
  }

  render(element = null) {
    if (element) {
      element.appendChild(this.element);
    } else {
      document.body.appendChild(this.element)
    }
  }

}

export default HTML;