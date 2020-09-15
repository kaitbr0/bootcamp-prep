// YOUR CODE BELOW
// const countToTen = (num) => {
//     while (num <= 10){
//         console.log(num)
//         num++
//     }
// }
// this is the iterative method, using a while loop.

const countToTen = (num) => {
    if (num <= 10){
        console.log(num)
        num++
        countToTen(num)
    }
}
//not returning anything here either but this 
//is a recursive method. 