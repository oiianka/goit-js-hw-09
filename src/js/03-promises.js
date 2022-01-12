import Notiflix from 'notiflix';

const form = document.querySelector('.form');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const amountValue = +e.currentTarget.elements.amount.value;
  const delayValue = +e.currentTarget.elements.delay.value;
  const stepValue = +e.currentTarget.elements.step.value;

  let delay = delayValue;

  for (let position = 1; position <= amountValue; position ++) {
    if (position != 1) {
      delay += stepValue;
    } else {
      delay = delayValue;
    }

    createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
  .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });

  }

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          let shouldResolve = Math.random() > 0.3;
          if (shouldResolve) {
            resolve({ position, delay });
          } else {
            reject({ position, delay })
          }
        }, delay)
    })
  }
});

//  Напиши скрипт, который при сабмите формы вызывает функцию 
//  createPromise(position, delay) столько раз, сколько ввели в поле amount. 
//  При каждом вызове передай ей номер создаваемого промиса (position) и 
//  задержку учитывая введенную пользователем первую задержку (delay) и шаг 
//  (step).

