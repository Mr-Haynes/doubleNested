
function doSomeMath(a, b, c) {

  function displaySum() {
    alert("A + B = " + (a + b).toString());
  }

  function displayDifference() {
    alert("A - B = " + (a - b).toString());
  }

  function displayBoth() {
    alert("But, A + B - A - B + C + C - B + A = " + (a + b - a - b + c + c - b + a - c).toString());
  }

  displaySum();
  displayDifference();
  displayBoth();
}