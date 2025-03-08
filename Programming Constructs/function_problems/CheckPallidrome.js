const isPalindrome = (num) => num === parseInt(num.toString().split("").reverse().join(""));

console.log(isPalindrome(121));
console.log(isPalindrome(123)); 
