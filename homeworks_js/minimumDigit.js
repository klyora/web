function minDigit(x) {
  if (x < 0 || !is_Integer(x)) {
    throw new Error("Число должно быть целым и неотрицательным!");
  }

  if (x === 0) {
    return 0;
  }

  let min = 9;

  while (x > 0) {
    let digit = x % 10;

    if (digit < min) {
      min = digit;
    }

    x = (x - digit) / 10;
  }

  return min;
}

function is_Integer(n) {
  if (typeof n !== "number") {
    return false;
  }

  if (n !== n) {
    return false;
  }

  if (n === Infinity || n === -Infinity) {
    return false;
  }

  return n % 1 === 0;
}

console.log("Наименьшая цифра в 0:", minDigit(0));
console.log("Наименьшая цифра в 7:", minDigit(7));
console.log("Наименьшая цифра в 161:", minDigit(161));
console.log("Наименьшая цифра в 16978:", minDigit(62978));
