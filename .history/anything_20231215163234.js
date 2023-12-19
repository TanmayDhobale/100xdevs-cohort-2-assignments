const  capitalizeWords = (array)=>{
    return array.map(capitalize);
}

const inputStrings = ["hello world", "goodbye", "javascript is fun"];
const capitalize = (a)=> a.toUpperCase(); 

const ans =  capitalizeWords(inputStrings , capitalize);
console.log(ans);


const capitalizeWords = (array) => {
    return array.map(capitalize);
}

const inputStrings = ["hello world", "goodbye", "javascript is fun"];
const capitalize = (str) => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const ans = capitalizeWords(inputStrings);
console.log(ans);
