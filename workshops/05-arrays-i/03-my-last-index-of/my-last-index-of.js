// YOUR CODE BELOW
const myLastIndexOf = (array, value, start = array.length) => {
    let last = -1
    for (let i = start; i > 0; i--){
        if (array[i] === value){
            return i
        }
    }
    return last
}