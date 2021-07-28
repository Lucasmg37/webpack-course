import './styles.css';

class Title {
  create(title) {
    const h1 = document.createElement('h1');
    h1.innerHTML = title;
    h1.classList.add('main-title');
    document.body.appendChild(h1);
  }
}

export default Title;