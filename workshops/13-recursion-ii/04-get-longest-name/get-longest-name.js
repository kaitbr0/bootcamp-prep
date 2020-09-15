// YOUR CODE BELOW
const getLongestName = (tree) => {
    let longest = '';
    console.log(longest.length); 
    for (let key in tree){
        console.log(tree[key])
        if (key.length > longest.length){
            longest = key
        }
        if (tree[key]){
            let kidsLongest = getLongestName(tree[key]);
            if (kidsLongest > longest){
                longest = kidsLongest 
            }
        }
    }
    return longest.toString()
}