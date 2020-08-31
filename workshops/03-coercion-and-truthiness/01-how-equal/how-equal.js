// YOUR CODE BELOW


const howEqual = (one, two) => {
    if (one === two){
        return 'strictly'
    }
    if (one == two){
        return 'loosely'
    }
    else return 'not equal'
}
