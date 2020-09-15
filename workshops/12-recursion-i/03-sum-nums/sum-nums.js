// YOUR CODE BELOW

const sumNums = num => {
    if (num === 1){
        return 1  
    }
    else {
        let sum = num + sumNums(num-1)
        return sum 
    }
}
//what happens when num is finally 1? sumNums returns 1 in the expression on line 8, 
//adds it to the sum, and returns the total sum. does not reset 'sum' each time. 