function isPowerOfTwo(num) {
    if (num <= 1) {
        return num === 1;
    }
    return isPowerOfTwo(num / 2);
}
document.write("<br>");
document.write('isPowerOfTwo function:');
document.write("<br>");
document.write(isPowerOfTwo(8));
document.write("<br>");
document.write(isPowerOfTwo(32));
document.write("<br>");
document.write(isPowerOfTwo(7));
document.write("<br>");
document.write(isPowerOfTwo(12));
document.write("<br>");
