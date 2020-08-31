// YOUR CODE BELOW

const myUnshift = (array, value) => {
    let newArr = []
    newArr.push(value); 
    for (let i = 0; i < array.length; i++){
        newArr.push(array[i])
    }
    return newArr
}