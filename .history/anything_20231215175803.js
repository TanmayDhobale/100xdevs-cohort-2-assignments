const findMaxLengthWords = (strings) => {
    return strings.map(calcultelenghth);
}

const inputStrings = ["apple", "banana", "kiwi", "grapefruit", "blueberry"];

const calcultelenghth = (n) => {
    return maxlength(n);
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
