// YOUR CODE BELOW
const theTruthCounts = (array) => {
    let counter = 0; 
    for (let i = 0; i < array.length; i++){
        let element = array[i]
        if (Array.isArray(element)){
            counter += theTruthCounts(element)
            }
        else {
        if (element){
            counter++
        }
    }
}
    return counter 

}
