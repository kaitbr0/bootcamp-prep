// YOUR CODE BELOW
function getDogBreeder(defaultN, defaultA) {
    return dogBreeder;
  
    function dogBreeder(name=defaultN, age=defaultA) {
      if (typeof name === 'number') {
        age = name;
        name = defaultN;
      }
  
      let newDog =  {
        name: name,
        age: age
      };
  
      return newDog;
    }
  }