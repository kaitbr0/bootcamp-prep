// YOUR CODE BELOW
const deeperCopy = (arr) => {
    const copy = []
    for (let i = 0; i < arr.length; i++){
        let element = arr[i]
        if (Array.isArray(element) ){
            //if it is an array keep going 
            const inner = []
            for (let j = 0; j < element.length; j++){
                let innerEl = element[j]
                inner.push(innerEl);
            }
            copy.push(inner); 
        } else {copy.push(element)
        }
    }
    return copy 
}