// YOUR CODE BELOW
const myIncludes = (arr, value) => {
    let result = false; 
    arr.forEach((item)=>{if (item === value){result = true}})
    return result; 
}