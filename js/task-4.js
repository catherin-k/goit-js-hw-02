function formatString(string, maxLength = 40) {
  let str;
  if (string.length <= maxLength) {
    str = string;
  }
  if (string.length > maxLength) {
    str = string.slice(0, maxLength) + "...";
  }
  return str;
  // Write code under this line
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'

// // Если длина строки не превышает maxLength, функция возвращает
// ее в исходном виде.
// // Если длина больше maxLength, то функция
// обрезает строку до размера maxLength символов и
// добавляет в конец строки троеточие ...,
// после чего возвращает укороченную версию.
