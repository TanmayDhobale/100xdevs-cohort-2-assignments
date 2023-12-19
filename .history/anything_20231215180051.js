
const findMaxLengthWords = (strings) => {
    return strings.map(calcultelenghth);
}

const inputStrings = ["apple", "banana", "kiwi", "grapefruit", "blueberry"];

const calcultelenghth = (n) => {
    return maxlength(n);
}

const maxlength = (word) => {
    // Split the string into words
    const words = word.split(' ');

    // Find the length of the longest word
    const maxWordLength = words.reduce((max, current) => {
        return Math.max(max, current.length);
    }, 0);

    return maxWordLength;
}

const ans = findMaxLengthWords(inputStrings, calcultelenghth);
console.log(ans);
