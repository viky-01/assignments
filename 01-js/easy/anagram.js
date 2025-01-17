/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/**
 * Check if two strings are anagrams of each other.
 * 
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {boolean} - Returns true if the strings are anagrams, false otherwise.
 */
function isAnagram(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const formatString = (str) => str.replace(/[^\w]/g, '').toLowerCase();

  // Format both strings
  const formattedStr1 = formatString(str1);
  const formattedStr2 = formatString(str2);

  // If lengths differ, they cannot be anagrams
  if (formattedStr1.length !== formattedStr2.length) {
    return false;
  }

  // Sort the letters of both strings and compare
  const sortedStr1 = formattedStr1.split('').sort().join('');
  const sortedStr2 = formattedStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}


module.exports = isAnagram;
