let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
const leetTranslator = (stri) => {
    stri = stri.toLowerCase();
    let leetString = ''
    let dict = {}
    for (let i = 0; i < letters.length; i++){
        let letter = letters[i]
        let leet = leetChars[i]
        dict[letter] = leet
    }
    for (let i = 0; i < stri.length; i++){
        let char = stri[i]
        leetString += dict[char];
    }

    return leetString;
}