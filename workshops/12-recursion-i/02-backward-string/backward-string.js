// YOUR CODE BELOW
// const backwardString = (str) => {
//     let i = str.length-1
//     while (i >= 0){
//         console.log(str[i])
//         i--;
//     }
// }

const backwardString = str => {
    //base case = length 1 
    if (str.length === 1){
        console.log(str); 
    }
    else {
        let last = str[str.length-1]; 
        console.log(last)
        str = str.slice(0,-1)
        backwardString(str) 
    }
}
