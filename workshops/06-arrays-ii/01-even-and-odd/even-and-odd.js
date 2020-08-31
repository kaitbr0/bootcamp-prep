// YOUR CODE BELOW
const evenAndOdd = (array) => {
    let result = []
    let evens = []
    let odds = []
    for (let i = 0; i < array.length; i++){
        if (array[i]%2===0){
            evens.push(array[i])
        }
        else {odds.push(array[i])}
    }
    result.push(evens);
    result.push(odds);
    return result 
}