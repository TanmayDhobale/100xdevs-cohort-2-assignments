/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const a = str.toLowerCase();
  const b = lower.replace(/[^a-z]/g, '');
  const rev = result.split('').reverse().join('');
  if( b === rev){
    return true;
  }else 
{ return false; }}

module.exports = isPalindrome;
