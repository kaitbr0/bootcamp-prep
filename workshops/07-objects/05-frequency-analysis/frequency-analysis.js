// YOUR CODE BELOW


const frequencyAnalysis = (string) => {
    let count = {};
    for (let i = 0; i < string.length; i++){
        let current = string[i]
        if (count[current]){
            count[current] += 1
        }
        if (!count[current]){
            count[current] = 1
        }
    }
    return count 
}

