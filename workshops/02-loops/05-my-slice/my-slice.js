// YOUR CODE BELOW
const mySlice = (original, start = 0, end = original.length) => {
    let str = ''
    for (let i = start; i < end; i++){
        str += original[i] 
    }
    return str
}