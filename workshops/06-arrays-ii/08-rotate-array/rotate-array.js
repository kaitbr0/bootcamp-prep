// YOUR CODE BELOW
const rotateArray = (original, num) => {
    let result = []
    if (num === 0){
        return original
    }
    if (num > 0){
        for (let i = 0; i < num; i++){
            result.push(original.pop())
        }
        for (let i = 0; i < original.length; i++){
            let current = original[i]
            result.push(current);
        }
    }
    if (num < 0){
        num *= -1 
        for (let i = num; i < original.length; i++){
            let current = original[i]
            result.push(current)
            original.pop()
        }
        for (let i = 0; i < original.length; i++){
            result.push(original[i])
        }
    }
    return result 
}