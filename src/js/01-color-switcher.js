
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
  };
  let timerId = null;

refs.startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
            }, 1000);
            refs.startBtn.setAttribute("disabled", "disabled");
            refs.stopBtn.removeAttribute("disabled");
          });

refs.stopBtn.addEventListener('click', () => {
        clearInterval(timerId);
        refs.stopBtn.setAttribute("disabled", "disabled");
        refs.startBtn.removeAttribute("disabled");
      });
    
