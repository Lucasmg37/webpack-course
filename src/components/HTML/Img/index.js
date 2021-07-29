import HTML from '../index';

class Img extends HTML {
  constructor(img) {
    super(document.createElement('img'));
    this.element.src = img;
  }
}
export default Img;