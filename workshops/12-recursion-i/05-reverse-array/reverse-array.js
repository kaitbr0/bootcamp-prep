// YOUR CODE BELOW
const reverseArray = (array) => {
    let arr = [...array]
    let reverse = []
    if (arr.length === 1){
        return array.slice() 
    }
    let last = array[array.length-1]
    reverse.push(last) 
    let reversedRemainingElements = reverseArray(array.slice(0, -1));
    reverse = reverse.concat(reversedRemainingElements)
    return reverse 
}
