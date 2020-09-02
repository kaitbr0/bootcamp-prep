// YOUR CODE BELOW
const myJoin = (array, separator = ',') => {
    let result = ''
    let word = ''
    for (let i =0; i < array.length; i++){
        let element = array[i];
        if (i !==0 ){
            result += separator; 
        }
        if (element !== undefined && element !== null){
            result += element; 
        }
    }
    return result; 
}


//if we're in a word, concat the letter to a word
//concat the full word to the result
//if we're at a space, add a separator
//if we're at 'undefined or null' put in ''
