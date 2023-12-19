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

module.exports = isAnagram;
