function fibb(n) {
  if (!is_Integer(n) || n < 0 || n > 1000) {
    throw new Error(
      "Аргумент 'n' должен быть целым числом в диапазоне от 0 до 1000!"
    );
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
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

console.log("0 число из последовательности: ", fibb(0));
console.log("1 число из последовательности: ", fibb(1));
console.log("10 число из последовательности: ", fibb(10));
console.log("50 число из последовательности: ", fibb(50));
console.log("1000 число из последовательности: ", fibb(1000));