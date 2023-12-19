const findMaxLengthWords = (strings) => {
    return strings.map(calculateLength);
}

const inputStrings = ["apple", "banana", "kiwi", "grapefruit", "blueberry"];

const calculateLength = (word) => {
    return maxLength(word);
}

const maxLength = (word) => {
    return word.split(' ').reduce((max, current) => {
        return Math.max(max, current.length);
    }, 0);
}

const ans = findMaxLengthWords(inputStrings);
console.log(ans);
