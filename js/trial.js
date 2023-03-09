// ---------------------------------CODEWARS---------------------------------
// 1)Given a string of digits, you should replace any digit below 5 with '0' and
// any digit 5 and above with '1'.Return the resulting string.

function fakeBin(x) {
  x = x.split('');
  for (let i = 0; i < x.length; i += 1){
    if (x[i] < 5) {
      x[i] = 0;
    } else {
      x[i] = 1;
    }
  }
  return x.join('');
    
}

console.log(fakeBin('45385593107843568'));
// 01011110001100111