// 1. Функция debounce
// Напишите функцию debounce. Эта функция должна гарантировать, что данная
// функция не вызывается слишком часто. При вызове она должна ожидать
// определенное количество времени перед выполнением. Если функция вызывается
// снова в течение этого времени, таймер должен быть сброшен.

function debounce(func, delay) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(func, delay);
  };
}

const debouncedFunction = debounce(() => {
  console.log("Вызвана функция с задержкой");
}, 2000);
debouncedFunction();
debouncedFunction(); // Этот вызов должен сбросить таймер и предотвратить мгновенный вызов функции
