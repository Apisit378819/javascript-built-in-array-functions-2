function isPalindrome(string) {
  // Start coding here
  return string === string.split('').reverse().join('')
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false