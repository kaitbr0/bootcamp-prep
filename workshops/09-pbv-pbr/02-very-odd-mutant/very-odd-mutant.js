// YOUR CODE BELOW
const veryOddMutant = (arr) => {
    let count = 0
   for (let i = 0; i < arr.length; i++){
       let num = arr[i]
       if (!(num%2)){
           arr[i] = 'normie'
           count++
       }
   }
    return count 

}
//we have to reassign 'arr[i]' to normie
//reassigning 'num' does not mutate the array
//it just reassigns the variable 