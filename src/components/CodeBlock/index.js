import Button from '../HTML/Button';
import Div from '../HTML/Div';
import Img from '../HTML/Img';

import clipboardIcon from '../../assets/icons/clipboard.svg';
import './styles.scss';

class CodeBlock {
  create(elem) {
    const pre = document.createElement('pre');
    pre.appendChild(elem);

    const div = new Div('code-block', [pre]);
    const imgClip = new Img(clipboardIcon).getElement();
    div.addChildren(new Button('clipboard', [imgClip]).getElement());

    div.render();
  }
}

export default CodeBlock;