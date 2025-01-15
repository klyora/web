function cesar(str, shift, action) {
  const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  const alphabetLength = alphabet.length;

  shift = ((shift % alphabetLength) + alphabetLength) % alphabetLength;

  if (action === "decode") {
    shift = -shift;
  }

  let result = "";

  for (let char of str) {
    const isUpperCase =
      char === char.toUpperCase() && alphabet.includes(char.toLowerCase());
    const charLower = char.toLowerCase();
    const index = alphabet.indexOf(charLower);

    if (index === -1) {
      result += char;
    } else {
      let newIndex = (index + shift + alphabetLength) % alphabetLength;
      let newChar = alphabet[newIndex];

      result += isUpperCase ? newChar.toUpperCase() : newChar;
    }
  }

  return result;
}

console.log(
  "Шифрование 'хакуна матата' со сдвигом 8: ",
  cesar("хакуна матата", 8, "encode")
);
console.log(
  "Дешифровка 'эзтыхз фзъзъз' со сдвигом 8: ",
  cesar("эзтыхз фзъзъз", 8, "decode")
);