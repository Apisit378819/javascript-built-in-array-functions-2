function isPalindrome(string) {
  return string.split("").reverse().join("") === string;

  // Start coding here
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
