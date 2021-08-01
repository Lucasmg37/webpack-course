class Log {
  create(text) {
    const code = document.createElement('code');
    code.innerHTML = text;
    code.classList.add('log-item');
    return code;
  }
}
export default Log;