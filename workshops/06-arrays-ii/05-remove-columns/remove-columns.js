// YOUR CODE BELOW
const removeColumns = (original, num) => {
    for (let i = 0; i < original.length; i++){
        for (let j = 0; j < num; j++){
            original[i].pop()
        }
    }
    return original 
}