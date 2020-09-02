// YOUR CODE BELOW
const makeGrid = (columns, rows) => {
    let grid = []
    let row = []
    for (let i = 0; i < columns; i++){
        row.push(i+1)
    }
    for (let i = 0; i < rows; i++){
        grid.push(row)
    }
    return grid

}