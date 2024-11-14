// 1. Реализация простого калькулятора
// Создайте класс Calculator, который симулирует работу простого калькулятора с
// методами:
// ● add(a, b) - возвращает сумму a и b.
// ● subtract(a, b) - возвращает разность a и b.
// ● multiply(a, b) - возвращает произведение a и b.
// ● divide(a, b) - возвращает результат деления a на b. Если b равно 0,
// возвращает сообщение об ошибке.
// Создайте экземпляр класса и продемонстрируйте его использование, вызывая методы
// с разными аргументами.

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return "Holy moly it's unimpossible =O";
    }
    return a / b;
  }
}

const calculator = new Calculator();

console.log("Сложение:", calculator.add(10, 5)); // 15
console.log("Вычитание:", calculator.subtract(10, 5)); // 5
console.log("Умножение:", calculator.multiply(10, 5)); // 50
console.log("Деление:", calculator.divide(10, 5)); // 2
console.log("Деление на ноль:", calculator.divide(10, 0)); // ошибка
