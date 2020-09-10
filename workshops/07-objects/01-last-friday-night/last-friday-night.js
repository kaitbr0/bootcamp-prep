// YOUR CODE BELOW
const lastFridayNight = (array) => {
    let total = 0
    for (let i = 0; i < array.length; i++){
        total += array[i].amount
    }
    //array.forEach((i)=>{total += array[i].amount})
    return total
}



//spread object and inspect inside: 
//const { amount } = array[i]