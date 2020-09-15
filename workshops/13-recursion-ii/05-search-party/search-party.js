// YOUR CODE BELOW
const searchParty = (name, world) => {
    let directions = []
    for (let key in world){
        if (typeof world[key] === 'string'){
            let person = world[key]
            if (person === name){
                return [key]; 
            }
        }
        else if (Array.isArray(world[key])){
            let people = world[key]
            if (people.includes(name)){
                return [key] 
            }
        }
        else {
            let next = world[key]
            let resultNext = searchParty(name, next);
            if (resultNext){
                return [key].concat(resultNext)
            }
        }
    }
    return null; 
}

    //search through world object
    //looking for name
    //return direcions in array
    //or return null