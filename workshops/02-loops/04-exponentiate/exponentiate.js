// YOUR CODE BELOW
const exponentiate = function(base, power){
    let result = 1; 

    for (let i = 0; i < power; i++){
        result *= base;
    }
    return result; 
}
