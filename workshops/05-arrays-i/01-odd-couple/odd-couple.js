// YOUR CODE BELOW

const oddCouple = (array) =>{
    let newArr = []
    array.forEach((num)=>{if (num % 2 === 1){newArr.push(num)}})
    while (newArr.length > 2){
        newArr.pop()
    }
    return newArr
}

