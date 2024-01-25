const REMOVE_MESSAGE_TIMEOUT = 500;

// 1. Функция для проверки длины строки
const stringLongCheck = (string, length) => string.length <= length;
stringLongCheck('Проверяемая строка', 11);
stringLongCheck('проверяемая строка', 20);
stringLongCheck('проверяемая строка', 18);
stringLongCheck('проверяемая строка', 10);

// 2. Функция для проверки, является ли строка палиндромом.
const palidnromCheck = (string) => {
  string = string.toLowerCase().replace(/\s/g, '');
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string.at(-i - 1)){
      return false;
    }
  }
  return true;
};

palidnromCheck('Топот');
palidnromCheck('Кексо');
palidnromCheck('Лёша на полке клопа нашёл ');

// 3. Извлекатель чисел.
const exctractNumber = (arg) => {
  const string = arg.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))){
      result += string[i];
    }
  }

  return parseInt(result, 10);
};

exctractNumber('2023 год');
exctractNumber('ECMAScript 2022');
exctractNumber('1 кефир, 0.5 батона');
exctractNumber('агент 007');
exctractNumber('а я томат');

const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

function idGenerator () {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const timeToMinutes = (x) => {
  const phrase = x.split(':');
  const minutes = (Number(phrase[0]) * 60) + Number(phrase[1]);
  return minutes;
};

const timeCheck = (a, b, c, d) => {
  //переводим a, b, с в числа (в минуты)
  const startDayTime = timeToMinutes(a);
  const endDayTime = timeToMinutes(b);
  const startMeetingTime = timeToMinutes(c);
  // проверяем что встреча начинается не раньше начала раб дня
  if(startMeetingTime < startDayTime) {
    return false;
  }
  // вычисляем сколько осталось до конца раб дня с момента начала встречи
  const leftTime = endDayTime - startMeetingTime;
  // проверяем что встреча кончается до конца раб дня
  if(leftTime >= d) {
    return true;
  } else {
    return false;
  }
};

timeCheck('08:00', '17:30', '14:00', 90); // true
timeCheck('8:0', '10:0', '8:0', 120); // true
timeCheck('08:00', '14:30', '14:00', 90); // false
timeCheck('14:00', '17:30', '08:0', 90); // false
timeCheck('8:00', '17:30', '08:00', 900); // false
//событие на нажатие кнопки ESC
const isEscapeKey = (evt) => evt.key === 'Escape';

const errorMessageTemplate = document
  .querySelector('#data-error')
  .content
  .querySelector('.data-error');

function showErrorMessage() {
  const errorElement = errorMessageTemplate.cloneNode(true);
  document.body.append(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
}

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

function throttle (callback, delayBetweenFrames) {
  // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
  // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
  let lastTime = 0;

  return (...rest) => {
    // Получаем текущую дату в миллисекундах,
    // чтобы можно было в дальнейшем
    // вычислять разницу между кадрами
    const now = new Date();

    // Если время между кадрами больше задержки,
    // вызываем наш колбэк и перезаписываем lastTime
    // временем "последнего кадра"
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export { getRandomInt, getRandomArrayElement, idGenerator, timeCheck, isEscapeKey, showErrorMessage, debounce, throttle };
