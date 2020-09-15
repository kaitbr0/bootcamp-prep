// YOUR CODE BELOW
const allSystemsGo = (obj) => {
    for (let key in obj){
        let value = obj[key]
        if (typeof value === 'object'){
            let sub = allSystemsGo(value); 
            if (!sub){
                return false 
            }
        }
        if (!value){
            return false 
        }
    }
    return true; 
}
