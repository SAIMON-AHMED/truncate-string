//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
//Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (str.length > num) {  // condition check
    return str.substring(0, num) + "...";  // returning desired string
  }
  return str;  // return if condition fails

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
