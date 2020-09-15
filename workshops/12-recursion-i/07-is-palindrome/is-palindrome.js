// YOUR CODE BELOW
const isPalindrome = (word) => {
    word = word.toLowerCase();
    if (word.length === 1){
        return true; 
    }
    if (word.length === 2) {
        return word[0] === word[1];
      }
    
  // recursive case: string.length must get closers to 1 or 2
  // check if first and last letters are different
  let firstLetter = word[0];
  let lastLetter = word.slice(-1);

  // if the first and last letters are different...
  if (firstLetter !== lastLetter) {

    // ...the string can't be a palindrome; return false
    return false;
  }

  // else, have to see if the rest of the string (excluding first and last letters is a palindrome)
  let remainingStringIsPalindrome = isPalindrome(word.slice(1, -1));

  // if the remaining string is a palindrome, return true; else return false, which can be shortened to...
  return remainingStringIsPalindrome;

}