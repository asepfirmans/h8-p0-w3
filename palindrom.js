function palindrome(kata) {
  for (var i = kata.length - 1; i >= 0; i--) {
    output = " "
    output = output + kata[i]
  }
  for (var j = 0; j < kata.length; j++) {
    output2 = " "
    output2 = output2 + kata[j]
  }
  if (output === output2) {
    return true
  }
  else {
    return false
  }
}
