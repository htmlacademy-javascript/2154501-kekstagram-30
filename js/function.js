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

export { getRandomInt, getRandomArrayElement, idGenerator };
