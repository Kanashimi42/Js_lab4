function findMin() {
    if (arguments.length === 0) {
      return undefined;
    }
  
    const argsArray = Array.from(arguments);
  
    const minValue = argsArray.reduce((min, current) => (current < min ? current : min), argsArray[0]);
  
    return minValue;
  }
  
  const minResult = findMin(15, 32, 64, 5, 9, 4);
  document.write('findmin function:')
  document.write("<br>");
  document.write(minResult);
  document.write("<br>");
  