// YOUR CODE BELOW
const reverseArray = (arr) => {
    let result = []
    for (let i = arr.length-1; i >= 0; i--){
        result.push(arr[i])
    }
    while (arr.length){
        arr.pop()
    }
    result.forEach(el => {arr.push(el)})
    return arr; 
}
