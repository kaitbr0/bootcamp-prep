// YOUR CODE BELOW
const cloneMachine = (obj) => {
    let clone = {}
    clone.name = obj.name + 'Clone'
    clone.species = obj.species
    clone.offspring = []
    obj.offspring.push(clone.name);
    return clone; 
}

