//เช็คว่า string ที่กรอกเข้ามา เมื่อย้อนสมาชิกกลับแล้วยังอ่านได้เหมือนเดิมไหม
function isPalindrome(string) {
  // Start coding here
  let newString = string.split("").reverse().join("")
  return newString === string  
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false