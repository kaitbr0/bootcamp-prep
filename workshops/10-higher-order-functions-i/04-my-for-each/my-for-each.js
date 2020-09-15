// YOUR CODE BELOW
const myForEach = (array, cb) => {
    for (let i = 0; i < array.length; i++){
        let current = array[i]
        cb(current, i); 
    }
//not returning anything here. 
}
