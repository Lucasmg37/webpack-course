import './styles.scss';

class CodeBlock {
  create() {
    const div = document.createElement('div');
    div.classList.add('code-block');
    document.body.appendChild(div);
  }
}

export default CodeBlock;