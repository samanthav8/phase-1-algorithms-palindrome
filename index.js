/* Rewriting the problem in my words
Take the input from the user
Use a temporary variable to store the input
Find the reverse of that variable
Compare the given input with variable
If variable and the input are the same return true
If they are not the same, return false
*/
function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  if (word === reversedWord)
    return true;
  else 
    return false;
}


/* 
  Add your pseudocode here
Split the word using .split('')
Reverse the word using .reverse()
Join the word using .join('')
Check to see if the word === reversedWord
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
