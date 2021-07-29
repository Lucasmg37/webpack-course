class Log {
  create(text) {
    const p = document.createElement('p');
    p.innerHTML = text;
    p.classList.add('log-item');
    return p;
  }
}
export default Log;