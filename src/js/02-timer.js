// es modules are recommended, if available, especially for typescript
import flatpickr from "flatpickr";

// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

// const flatpickr = require("flatpickr");

const startBtn = document.querySelector('[data-start]');
const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');




const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0].getTime() > new Date().getTime()) {
        startBtn.removeAttribute("disabled"); 
    startBtn.addEventListener('click', () => {
      setInterval(() => {
        if ((selectedDates[0] - new Date()) >= 0) {
          updateTimer(convertMs(selectedDates[0] - new Date()));
        }
      }, 1000);

    });
    
      }
      else {
        window.alert("Please choose a date in the future")
      }
    },
  };

  flatpickr('#datetime-picker', options);

startBtn.setAttribute("disabled", "disabled");

function updateTimer({ days, hours, minutes, seconds }) {
    daysTimer.textContent = addLeadingZero(`${days}`);
    hoursTimer.textContent = addLeadingZero(`${hours}`);
    minutesTimer.textContent = addLeadingZero(`${minutes}`);
    secondsTimer.textContent = addLeadingZero(`${seconds}`);
  }



function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  function addLeadingZero(value) {
    return String(value).padStart(2, '0')
  }

 

 