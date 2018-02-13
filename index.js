function sumItems(array) {
    // Print out all it's items individually
  let  arraySum = 0;
  array.forEach((number) => {
      if (Array.isArray(number)) {
        // Print out all it's items individually
        arraySum += sumItems(number)
      } else {
      arraySum += number;
    } 
  });
  return arraySum;
}

module.exports = sumItems;