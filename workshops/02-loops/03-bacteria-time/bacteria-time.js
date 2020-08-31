// YOUR CODE BELOW
function bacteriaTime(current, target){
    if (target < current) {
        return 'targetNum must be larger than currentNum'
    }
    let counter = 0; 
    while (current < target){
        counter += 20;
        current = current * 2; 
    }
    return counter 
}