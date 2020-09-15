// YOUR CODE BELOW
const countVowels = (str) => {
    if (str.length === 0){
        return 0; 
    }
    let count = 0; 
    if (isVowel(str[0])){
        count+=1
    }
    count += countVowels(str.slice(1))

  return count;
}
//the call stack is holding all of these function calls
//so the count can be 'reset' and the other counts wont be lost

// helper function that returns true if the character is a vowel
function isVowel(char) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char);
}
