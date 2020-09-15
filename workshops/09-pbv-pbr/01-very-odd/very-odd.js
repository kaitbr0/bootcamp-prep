// YOUR CODE BELOW
const veryOdd = (arr) => {
    let result = []
    arr.forEach(val => {if (val%2===1){result.push(val);}})
    return result 
}
