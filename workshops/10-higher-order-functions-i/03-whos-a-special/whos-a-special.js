// YOUR CODE BELOW
const whosASpecial = (array) => {
    let result = []
    array.forEach(el => {result.push(`${el.name} the ${el.species} is very special!`)})
    let solution = result.join(' ')
    //console.log(solution); 
    return solution 
}