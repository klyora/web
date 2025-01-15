function gcd(a, b) {
  if (a < 0 || b < 0) {
    throw new Error("Числа не могут быть отрицательными!");
  }

  // Особый случай, когда оба числа равны 0
  if (a === 0 && b === 0) {
    return 0;
  }

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }

  return a === 0 ? b : a;
}

console.log("НОД для 0 0: ", gcd(0, 0));
console.log("НОД для 15 5: ", gcd(15, 5));
console.log("НОД для 17 0: ", gcd(17, 0));
