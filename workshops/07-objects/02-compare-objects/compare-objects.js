// YOUR CODE BELOW
const compareObjects = (one, two) => {
    for (let key in one){
        if (one[key] !== two[key]){
            return false 
        }
    }
    for (let key in two){
        if (one[key] !== two[key]){
            return false; 
        }
    }
    return true
}


//ALT SOLUTION//

// const compareObjects = (one, two) => {
// objOneKeys = Object.keys(one);
// objTwoKeys = Object.keys(two);
// if (objOneKeys.length !== objTwoKeys.length){
//     return false; 
// }
// for (let i = 0; i < objOneKeys.length; i++){
//     const current = objOneKeys[i];
//     if (one[current] !== two[current]) return false;
// }
//     return true; 

// }
