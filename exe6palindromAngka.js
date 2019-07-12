function angkaPalindrome(num) {
    while (true) {
        num++
        var number = String(num);
        var tempNumb = '';
        for (var i = 0; i < number.length; i++) {
            tempNumb = number[i]+ tempNumb 
        } if (number === tempNumb) {
            return Number(number)
        }
    }
