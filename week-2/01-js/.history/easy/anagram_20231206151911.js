/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// function isAnagram(str1, str2) {
//   let a = str1.toLowerCase();
//   let b = str2.toLowerCase();
   
//   if(a.length !== b.length) {return  false;} 

//   let sortedA = a.split('').sort().join('');
//   let sortedB = b.split('').sort().join('');

//    return sortedA === sortedB  ;
  
// }

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




module.exports = isAnagram;
