// YOUR CODE BELOW
const crazyCaps = (str) => {
    let result = ''
    for (let i = 0; i < str.length; i++){
        if (i % 2 === 1){
            result += str[i].toUpperCase()
        } 
        else result += str[i]
    }
    return result 
}

