// YOUR CODE BELOW
const finderFunction = (array, callback) => {
    for (let i = 0; i < array.length; i++){
        let current = array[i]
        if (callback(current)){
            return i
        }
    }
    return -1
}