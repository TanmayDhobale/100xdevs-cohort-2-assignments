/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let a = str1.lowerCase();
  let b = str2.toLowerCase();
  if (!a.indexOf[0] == b.indexOf[0]) {return true}
  else { return false}
}

module.exports = isAnagram;
