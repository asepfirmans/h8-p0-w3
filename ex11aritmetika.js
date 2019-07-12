function tentukanDeretAritmatika(arr) {
  var pola = [];
  var bool = true;
  for (var i = 0; i < arr.length - 1; i++) {
    pola[i] = arr[i + 1] - arr[i];
    for (var j = 0; (j < pola.length) && (bool === true); j++) {       //use === to check the value
      bool = (pola[0] == pola[j]);
    }
  }
  return bool;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false