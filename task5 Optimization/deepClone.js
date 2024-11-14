//  2. Глубокое клонирование объекта
//  Напишите функцию, которая выполняет глубокое клонирование объекта, т.е.
//  вложенные объекты также должны быть склонированы, а не переданы по ссылке.
//  Пример:
const original = {
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
};
const copy = deepClone(original);
copy.address.city = "Los Angeles";
console.log(original.address.city); // New York (оригинальный объект не должен измениться)
console.log(copy.address.city); // Los Angeles

function deepClone(obj) {
  return structuredClone(obj);
}
