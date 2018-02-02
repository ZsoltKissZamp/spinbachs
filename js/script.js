let count = 0;
let h3 = document.getElementById('change');
let change = setInterval(function() {
  count++;
  if(count == 13) {
    h3.innerHTML = "Thank You 4 the Drop by! See you Soon!";
    clearInterval(change);
  }
}, 1000);