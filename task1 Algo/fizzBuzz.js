// 2. FizzBuzz
//  Напишите функцию, которая выводит числа от 1 до 100. Но для кратных трём
//  выводите "Fizz" вместо числа, а для кратных пяти — "Buzz". Для чисел, кратных как
//  трём, так и пяти, выводите "FizzBuzz".
function fizzBuzz() {
  const log = console.log;

  for (let i = 1; i <= 100; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        log("FizzBuzz");
        break;
      case i % 3 === 0:
        log("Fizz");
        break;
      case i % 5 === 0:
        log("Buzz");
        break;
      default:
        log(i);
    }
  }
}
fizzBuzz();
