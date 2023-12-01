function numbers(...args) {
    return args.filter(arg => typeof arg === 'number').length;
}
document.write('numbers function:');
document.write("<br>");
document.write(numbers(1, 2, "a"));
document.write("<br>");
document.write(numbers(true, 2, false));
document.write("<br>");
document.write(numbers());
document.write("<br>");