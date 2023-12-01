function reverseNumber(n) {
  if (n < 10) {
    return n;
  }
  const lastDigit = n % 10;
  const remainingDigits = parseInt(n / 10);
  const reversed = reverseNumber(remainingDigits);
  return lastDigit * Math.pow(10, Math.floor(Math.log10(reversed) + 1)) + reversed;
}

const inputNumber = prompt("Введите число:");
const userNumber = parseInt(inputNumber);
const reversedNumber = reverseNumber(userNumber);
document.write("<br>");
document.write('reverseNumber function:');
document.write("<br>");
document.write('Число ' + userNumber + ' \"справа налево\": ' + reversedNumber);
