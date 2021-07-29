import Button from '../HTML/Button';
import Div from '../HTML/Div';
import Img from '../HTML/Img';

import clipboardIcon from '../../assets/icons/clipboard.svg';
import './styles.scss';
class CodeBlock {
  create(elem) {
    const div = new Div('code-block', [elem]);
    div.render();

    const imgClip = new Img(clipboardIcon).getElement();
    div.addChildren(new Button('clipboard', [imgClip]).getElement());
  }
}

export default CodeBlock;