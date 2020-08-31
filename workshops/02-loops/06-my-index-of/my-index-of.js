// YOUR CODE BELOW
const myIndexOf = (source, value, start) => {
   // console.log(source, start, value) 
    if (start === undefined){
        start = 0; 
    }
    for (let i = start; i < source.length + 1-value.length; i++){
        let thisWord = source.slice(i, i+value.length)
        if (thisWord === value){
            return i
        }
    }
    return -1
}; 

