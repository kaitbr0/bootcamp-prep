// YOUR CODE BELOW

function arrayFlattener(twoDimensionalArray) {
    let flatArray = [];
    for (let i = 0; i < twoDimensionalArray.length; i++) {
      let element = twoDimensionalArray[i];
        if (Array.isArray(element)) {
          flatArray = flatArray.concat(element);
      }
      else {
        flatArray.push(element);
      }
    }
    return flatArray;
  }