function pluralizeRecords(n) {
  let word;
  const lastTwoDigits = n % 100;
  const lastDigit = n % 10;

  // Особый диапазон от 11 до 14
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    word = "записей";
  } else {
    switch (lastDigit) {
      case 1:
        word = "запись";
        break;
      case 2:
      case 3:
      case 4:
        word = "записи";
        break;
      default:
        word = "записей";
    }
  }

  return `В результате выполнения запроса было найдено ${n} ${word}`;
}

console.log(pluralizeRecords(1));
console.log(pluralizeRecords(2));
console.log(pluralizeRecords(5));
console.log(pluralizeRecords(13));
