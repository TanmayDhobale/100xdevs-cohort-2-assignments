/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let a = str1.toLowerCase();
  let b = str2.toLowerCase();
   
  if(a.length !== b.length) {return  false;} 

  let sortedA = a.split('').sort().join('');
  let sortedB = b.split('').sort().join('');

   return sortedA === sortedB  ;
  
}


// function isAnagram(str1, str2) {
//   // Convert both strings to lowercase
//   let a = str1.toLowerCase();
//   let b = str2.toLowerCase();

//   // Check if the lengths of the strings are equal
//   if (a.length !== b.length) {
//     return false;
//   }

//   // Create objects to count the occurrences of each character in both strings
//   let charCountA = {};
//   let charCountB = {};

//   // Count the occurrences of each character in the first string
//   for (let char of a) {
//     charCountA[char] = (charCountA[char] || 0) + 1;
//   }

//   // Count the occurrences of each character in the second string
//   for (let char of b) {
//     charCountB[char] = (charCountB[char] || 0) + 1;
//   }

//   // Compare the character counts in both strings
//   for (let char in charCountA) {
//     if (charCountA[char] !== charCountB[char]) {
//       return false;
//     }
//   }

//   // If all character counts are equal, the strings are anagrams
//   return true;
// }


function isAnagram(str1, str2) {
  // to check anagram we need to check if both strings have same length if not then return false
  if (str1.length !== str2.length) {
    return false;
  }
  // convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  // create an object to store characters and their count
  const obj = {};
  // loop through first string
  for (let i = 0; i < str1.length; i++) {
    // if character is not in object then add it with count 1
    if (!obj[str1[i]]) {
      obj[str1[i]] = 1;
    } else {
      // if character is in object then increment its count
      obj[str1[i]]++;
    }
  }
  // loop through second string
  for (let i = 0; i < str2.length; i++) {
    // if character is not in object then return false
    if (!obj[str2[i]]) {
      return false;
    } else {
      // if character is in object then decrement its count
      obj[str2[i]]--;
    }
  }
  // loop through object
  for (let key in obj) {
    // if any character count is not 0 then return false
    if (obj[key] !== 0) {
      return false;
    }
  }
  // otherwise return true
  return true;
}

// console.log(isAnagram("lisTen", "Silent")); // true

module.exports = isAnagram;




module.exports = isAnagram;
