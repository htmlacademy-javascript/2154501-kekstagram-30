// 1. Функция для проверки длины строки
const stringLongCheck = (string, length) => string.length <= length;
stringLongCheck('Проверяемая строка', 11);
stringLongCheck('проверяемая строка', 20);
stringLongCheck('проверяемая строка', 18);
stringLongCheck('проверяемая строка', 10);

// 2. Функция для проверки, является ли строка палиндромом.
const palidnromCheck = (string) => {
  string = string.toLowerCase().replace(/\W|_/g, '');
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[-i - 1]){
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
