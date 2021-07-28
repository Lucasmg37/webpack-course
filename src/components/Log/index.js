class Log {
  create(text) {
    const p = document.createElement('p');
    p.innerHTML = text;
    p.classList.add('log-item');
    document.body.appendChild(p);
  }
}
export default Log;