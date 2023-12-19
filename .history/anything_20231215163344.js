const  capitalizeWords = (array)=>{
    return array.map(capitalize);
}

const inputStrings = ["hello world", "goodbye", "javascript is fun"];
const capitalize = (str)=> str.charAt(0).toUpperCase;

const ans =  capitalizeWords(inputStrings , capitalize);
console.log(ans);


