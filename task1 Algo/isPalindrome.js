// 1. Проверка на палиндром
//  Напишите функцию, которая проверяет, является ли строка палиндромом. Палиндром
//  —это слово, фраза, число или другая последовательность символов, которая
//  читается одинаково слева направо и справа налево (игнорируя пробелы, знаки
//  препинания и регистр)
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9а-яё]/g, "");
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

console.log(isPalindrome("А роза упала на лапу Азора")); // true
console.log(isPalindrome("Привет")); // false
