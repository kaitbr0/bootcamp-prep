// YOUR CODE BELOW
const mySplice = (arr, idx = 0, q = 1, insert) => {
    let removed = []
    let kept = []
    for (let i = 0; i < idx; i++){
        kept.push(arr[i])
    }
    if (insert !== undefined){
        kept.push(insert); 
    }
    for (let i = idx; i < idx+q; i++){
        removed.push(arr[i])
    }
    for (let i = idx+q; i< arr.length; i++){
        kept.push(arr[i])
    }
    while (arr.length){
        arr.pop()
    }
    kept.forEach(el => {arr.push(el)})
    return removed; 
}