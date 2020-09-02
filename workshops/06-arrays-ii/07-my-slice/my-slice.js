// YOUR CODE BELOW
const mySlice = (original, start = 0, end = original.length) => {
    let result = []
    if (start < 0){
        start = original.length + start
    }
    if (end < 0){
        end = original.length + end
    }
    for (let i = start; i < end; i++){
        result.push(original[i])
    }

    return result 

}