
const findMaxLengthWords = (strings) => {
    return strings.map(calculateLength);
}

const inputStrings = ["apple", "banana", "kiwi", "grapefruit", "blueberry"];

const calculateLength = (word) => {
    return maxLength(word);
}

const maxlength = (word) => {
    let maxWord = "";
    for (let i = 0; i < word.length; i++) {
        if (maxWord.length < word[i].length) {
            maxWord = word[i];
        }
    }
    return maxWord.length;
}

const ans = findMaxLengthWords(inputStrings);
console.log(ans);
