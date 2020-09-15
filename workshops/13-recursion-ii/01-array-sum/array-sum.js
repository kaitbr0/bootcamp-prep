// YOUR CODE BELOW
const arraySum = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++){
        let el = array[i]
        if (Array.isArray(el)){
            sum += arraySum(el) 
        }
        else {
            sum += el
        }
    }
    return sum 
}