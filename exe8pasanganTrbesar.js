 function pasanganTerbesar(num) {
   var stringNumber = String(num);
    var arrPair = [];
    for (var i = 0; i < stringNumber.length ; i++) {
      arrPair[i] = parseInt(stringNumber.slice(i, i + 2));
    }
    arrPair.sort(function (value1, value2) {return value2 > value1});
    return arrPair[0];
  }