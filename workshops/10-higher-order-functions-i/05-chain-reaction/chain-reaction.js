// YOUR CODE BELOW
const chainReaction = (start, array) => {
    array.forEach(callback => {
        //we're calling each function in the array using the start value
        start = (callback(start))
        //and then setting the start value to the result of the last function
    })
    return start;
    //and then returning the final version of the start value 
}

