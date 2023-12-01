function stringFrom(...args) {
  return args.join(' ');
}

const result1 = stringFrom('I have', 5, 'apples');
document.write("stringFrom function:");
document.write("<br>");
document.write(result1);
document.write("<br>");
const result2 = stringFrom('X value is', true);
document.write(result2);
document.write("<br>");
