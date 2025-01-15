function getSortedArray(array, key) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr[i] = array[i];
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j][key] > arr[j + 1][key]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const data = [
  { name: "Андрей", age: 32 },
  { name: "Иван", age: 25 },
  { name: "Анна", age: 44 },
  { name: "Наталья", age: 18 },
];

const sortedByName = getSortedArray(data, "name");
const sortedByAge = getSortedArray(data, "age");

console.log("Исходный массив:");
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

console.log("\nОтсортированный по имени:");
for (let i = 0; i < sortedByName.length; i++) {
  console.log(sortedByName[i]);
}

console.log("\nОтсортированный по возрасту:");
for (let i = 0; i < sortedByAge.length; i++) {
  console.log(sortedByAge[i]);
}
