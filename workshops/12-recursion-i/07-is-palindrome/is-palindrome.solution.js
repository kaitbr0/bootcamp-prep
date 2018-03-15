function isPalindrome (string) {
  // make string a uniform case
  string = string.toLowerCase();

  // base case: if string has a length of 1, it's a palindrome
  if (string.length === 1) {
    return true;
  }

  // second base case: if string has length of 2, it's a palindrome if the two letters are equal
  if (string.length === 2) {
    return string[0] === string[1];
  }

  // recursive case: string.length must get closers to 1 or 2
  // check if first and last letters are different
  let firstLetter = string[0];
  let lastLetter = string.slice(-1);

  // if the first and last letters are different...
  if (firstLetter !== lastLetter) {

    // ...the string can't be a palindrome; return false
    return false;
  }

  // else, have to see if the rest of the string (excluding first and last letters is a palindrome)
  let remainingStringIsPalindrome = isPalindrome(string.slice(1, -1));

  // if the remaining string is a palindrome, return true; else return false, which can be shortened to...
  return remainingStringIsPalindrome;
}
