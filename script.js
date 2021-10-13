
function addInMassiveNumbers() {
  let start;
  let count = 1;
  let arr = [];
  do {
      start = +prompt("How many elements in massive you want?\nmin 5 simbols\nmax 20 simbols");
  } while (start < 5 || start > 20 || start !== start);
  do {
  let addNumber;
  do {
      addNumber = +prompt(`Send number for add in massive ${count}`);
  } while (addNumber !== addNumber);
      count++;
      start--;
      arr.push(addNumber);
  } while (start >= 1);
  var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
  var min = i;
    for (var j = i + 1; j < n; j++) {
     if (arr[j] < arr[min]) min = j;
  }
  var t = arr[min];
      arr[min] = arr[i];
      arr[i] = t;
  }
    console.log(arr);
    return arr;
}
addInMassiveNumbers();
