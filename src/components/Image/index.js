import checkMarkButton from '../../assets/images/check-mark-button_2705.png';

class Image {

  addImage() {
    const img = document.createElement('img');
    img.src = checkMarkButton;
    img.width = 24;
    document.body.appendChild(img);
  }

}

export default Image;