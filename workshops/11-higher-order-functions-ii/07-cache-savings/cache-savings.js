// YOUR CODE BELOW
const cacheSavings = (callback) => {
    const obj = {}; 

    return function(arg){
        if (obj[arg]){
            //if the object has a key equal to the arg it means it's been called
            //just return the value 
            return obj[arg]
        } else {
            //if the object doesn't have the key
            //let the 'result' equal to the function result of this arg
            let result = callback(arg)
            //then save the argument as the key, and the result as the value
            obj[arg] = result; 
            //and return the result. 
            return result; 
        }
    }
}

