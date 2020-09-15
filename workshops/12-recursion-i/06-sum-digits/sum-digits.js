// YOUR CODE BELOW
const sumDigits = (int) => {
    let st = int.toString()
    if (st.length === 1){
        return int; 
    }
    let sum = 0; 
    sum += Number(st[0])
    sum += sumDigits(Number(st.slice(1)))
    return sum 
}

//base case
//declare 'sum' 
//add first element
//add remaining elements recursively, slicing to make smaller