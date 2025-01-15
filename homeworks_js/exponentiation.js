function pow(x, n) {
  if (n < 1 || !is_Integer(n)) {
    throw new Error("Степень должна быть натуральным числом!");
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
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

console.log("2 в 5 степени: ", pow(2, 5));
console.log("5 в 3 степени: ", pow(5, 3));
