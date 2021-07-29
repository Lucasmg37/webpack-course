import checkMarkButton from '../../assets/images/check-mark-button_2705.png';
import webpackBrand from '../../assets/images/icon-square-big.png';

class Image {
  addImage() {
    const img = document.createElement('img');
    img.src = checkMarkButton;
    img.width = 24;
    document.body.appendChild(img);
  }
  getImgBrand() {
    const img = document.createElement('img');
    img.src = webpackBrand;
    return img;
  }
}

export default Image;