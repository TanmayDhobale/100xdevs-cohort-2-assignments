const  capitalizeWords = (array)=>{
    return array.map(capitalize);
}

const inputStrings = ["hello world", "goodbye", "javascript is fun"];
const capitalize = (str)=> str.split('').map(word => word.charAt(0).toUpperCase());

const ans =  capitalizeWords(inputStrings , capitalize);
console.log(ans);


