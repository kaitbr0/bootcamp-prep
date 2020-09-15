// YOUR CODE BELOW
const callThemAll = (obj, value) => {
    let result = []
    for (let key in obj){
        let current = obj[key]
        if (typeof current === 'function'){
            let methodResult = current(value);
            result.push(methodResult); 
        }
    }
    return result 
}
//for each method, 
//pass the value in
//and push the result to 'result' array 