function findLongestWord(string = "") {
  const strSplit = string.split(" ");

  let longestWord = strSplit[0];

  for (let i = 1; i < strSplit.length; i += 1) {
    if (strSplit[i].length > longestWord.length) {
      longestWord = strSplit[i];
    }
  }
  return longestWord;
  // Write code under this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// ("jumped");

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
