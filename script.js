let count = 0;
const tL = [
  "Pleas stand by...",
  "This Page is Under construction",
  "Thank You 4 the Drop by",
  "See you Soon",
  "Bye"
];
let change = setInterval(function() {
  count++;
  if(count%5 == 0) {
    document.getElementById('change').innerHTML = tL[count/5];
    if(count/5 == tL.length - 1) {
      count = 0;
    }
  }
}, 1500);