function sum(a, b) {
    return a + b;
}

function div (a, b){
    return a / b;
}
  
function containsNumbers(text){
    for (let i = 0; i < text.length; i++) {
     if (!isNaN(text.charAt(i))) //The error here was caught, the issue is that an empty space character is treated as a number, so this gets triggered
      return true;
    }
    return false;
}

module.exports = { sum, div, containsNumbers };
