function mean() {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            sum += arguments[i];
            count++;
        }
    }

    return count === 0 ? 0 : sum / count;
}
document.write("<br>");
document.write('mean function:');
document.write("<br>");
document.write(mean(1, 2, 'a'));
document.write("<br>");
document.write(mean(true, 2, false));
document.write("<br>");
document.write(mean());
document.write("<br>");
