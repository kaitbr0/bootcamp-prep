// YOUR CODE BELOW
const stringify = (callback) => {
    return function(){
        return callback().toString();
    }
}